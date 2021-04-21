from graphql import \
    build_ast_schema, \
    GraphQLSchema, \
    get_directive_values, \
    is_object_type, \
    is_introspection_type, \
    is_interface_type, \
    is_union_type, \
    get_named_type, \
    is_list_type
from graphql.language.parser import parse
from gql import gql, Client
from gql.transport.aiohttp import AIOHTTPTransport
import copy

def decapitalize(string: str):
    """
    Make the first letter of string lower case.
    :param string:
    :return:
    """
    return string[0].lower() + string[1:]

def get_collection_name(type_name: str):
    return decapitalize(type_name) + "s"

def load_schema(file_name):
    """Load schema from file."""
    with open(file_name) as f:
        schema = build_ast_schema(parse(f.read()))

    return schema

def get_directive_values_from_field(schema, field, directive_name):
    """Return the values for a specific directive of a field.
    Use this method if you already have handle on the relevant field.
    Returns a dictionary of values or None.
    """
    # Get the target directive defintition from the schema
    directive = schema.get_directive(directive_name)
    # Use the GraphQL utility function to get the values for the directive on the field
    values = get_directive_values(directive, field.ast_node)
    return values

def get_directive_values_from_names(schema, type_or_interface_name, field_name, directive_name):
    """Return the values for a specific directive of a type or interface field.
    Returns a dictionary of values or None.
    """
    type_or_interface = schema.get_type(type_or_interface_name)
    # Underlying ast node (ObjectTypeDefinitionNode or InterfaceTypeDefinitionNode)
    ast_node = type_or_interface.ast_node
    # List of fields (FieldDefinitionNode)
    fields = ast_node.fields
    # Identify target field based on the name
    field = None
    for f in fields:
        if f.name.value == field_name:
            field = f
            break
    
    # Get the target directive defintition from the schema
    directive = schema.get_directive(directive_name)
    if directive == None:
        return None
    
    # Use the GraphQL utility function to get the values for the directive on the field
    values = get_directive_values(directive, field)
    return values

def is_user_defined_type(graphql_type):
    """Return true if the graphql type is a used defined type, interface or union."""
    if not (is_object_type(graphql_type) or is_interface_type(graphql_type) or is_union_type(graphql_type)):
        return False
    elif is_introspection_type(graphql_type):
        return False
    else:
        return True

def check_filters(doc, graphql_type, graphql_mapping_schema):
    """Check if the incoming document validates against all supplied directive filters."""
    collection_name = get_collection_name(graphql_type.name)
    for field_name, field in graphql_type.fields.items():
        # The doc field name is prefixed with the name of the collection
        doc_field_name = f"{collection_name}_{field_name}"
        named_type = get_named_type(field.type) # special case i object, skip now
        
        # equals
        eq_value = get_directive_values_from_field(graphql_mapping_schema, field, "eq")
        if eq_value:
            if is_list_type(field.type):
                print("WARNING: The @eq directive cannot be applied on lists. Did you mean to use @in?")
                return False
            value = eq_value.get(named_type.name.lower())
            if value != doc.get(doc_field_name):
                return False
        
        # less than
        lt_value = get_directive_values_from_field(graphql_mapping_schema, field, "lt")
        if lt_value:
            if is_list_type(field.type):
                print("WARNING: The @lt directive cannot be applied on lists. Did you mean to use @in?")
                return False
            value = lt_value.get(named_type.name.lower())
            if value <= doc.get(doc_field_name):
                return False
        
        # greater than
        gt_value = get_directive_values_from_field(graphql_mapping_schema, field, "gt")
        if gt_value:
            if is_list_type(field.type):
                print("WARNING: The @gt directive cannot be applied on lists. Did you mean to use @in?")
                return False
            value = gt_value.get(named_type.name.lower())
            if value >= doc.get(doc_field_name):
                return False

        # size
        size_value = get_directive_values_from_field(graphql_mapping_schema, field, "size")
        if size_value:
            if not is_list_type(field.type):
                print("WARNING: The @size directive can only be applied to lists.")
                return False
            size = len(doc.get(doc_field_name))
            value = size_value.get("int")
            if size_value.get("gt"):
                if value >= size:
                    return False
            if size_value.get("lt"):
                if value <= size:
                    return False
            if not size_value.get("gt") and not size_value.get("lt"):
                if value != size:
                    return False

    return True

def apply_filters(collections, graphql_mapping_schema):
    """Remove items from collection that do not match all the fields filter directives."""
    # For every collection
    for type_name, graphql_type in graphql_mapping_schema.type_map.items():
        # Only generate for user defined types
        if not is_user_defined_type(graphql_type):
            continue

        collection_name = get_collection_name(type_name)
        collection = collections[collection_name]
        i = 0
        while i < len(collection):
            doc = collection[i]
            if not check_filters(doc, graphql_type, graphql_mapping_schema):
                del collection[i]
            else:
                i += 1

def build_graphql_query(graphql_mapping_schema):
    """Build a GraphQL query based on a GraphQL mapping schema."""
    query = "query {"
    for type_name, graphql_type in graphql_mapping_schema.type_map.items():
        # Only generate for user defined types
        if not is_user_defined_type(graphql_type):
            continue

        collection_name = get_collection_name(type_name)

        query_fields = ""
        for field_name, field in graphql_type.fields.items():
            # If the field points to a user defined type we need to grab the ID
            if is_user_defined_type(get_named_type(field.type)):
                query_fields += f"\n    {collection_name}_{field_name}:{field_name} {{ id }}"
            else:
                query_fields += f"\n    {collection_name}_{field_name}:{field_name}"
        
        if query_fields != "":
            query += "\n  " + decapitalize(type_name) + "s {" + query_fields + "\n  }"
    query += "\n}"
    return query

def request(query, url):
    """Request data from a GraphQL endpoint."""
    transport = AIOHTTPTransport(url=url)
    client = Client(transport=transport, fetch_schema_from_transport=True)
    query = gql(query)
    return client.execute(query)

def get_join_keys(graphql_mapping_schema):
    """Generate a list of join keys from a GraphQL mapping file.
    Returns a list of join keys. Join keys are represented as pairs of tuples,
    where each tuple represents consists of a collection name and the field name.
    """
    join_keys = []
    for from_type, graphql_type in graphql_mapping_schema.type_map.items():
        # Skip non-user defined types
        if not is_user_defined_type(graphql_type):
            continue
        
        # Iterate the field of each type
        for from_field, field in graphql_type.fields.items():
            join_value = get_directive_values_from_field(graphql_mapping_schema, field, "join")
            if join_value == None:
                continue
            
            # Pointing 'from'
            from_collection = get_collection_name(from_type)
            _from = (from_collection, from_collection + "_" + from_field)
            
            # Pointing 'to'
            to_type, to_field = join_value["on"].split(".")
            to_collection = get_collection_name(to_type)
            _to = (to_collection, to_collection + "_" + to_field)
            
            # Add to join keys
            join_keys.append((_from, _to))
        
    return join_keys

def get_next_join_key(joined_collections, join_keys):
    """Return the index of the first join key that can be joined into collections or -1."""
    for join_key in join_keys:
        if join_key[0][0] in joined_collections:
            join_keys.remove(join_key)
            return join_key
        if join_key[1][0] in joined_collections:
            join_keys.remove(join_key)
            join_key = (join_key[1], join_key[0]) # switch order
            return join_key 
    
    return None

def check_join(value1, value2):
    """Returns true if the join between value1 and value2 is valid."""
    if type(value1) == list:
        for v in value1:
            if(check_join(v, value2)):
                return True
        return False

    if type(value2) == list:
        for v in value2:
            if(check_join(value1, v)):
                return True
    
    # unwrap if values refer to objects (i.e., is of the form { id: "Dummy/123" })
    value1 = value1["id"] if type(value1) == dict else value1
    value2 = value2["id"] if type(value2) == dict else value2
    if value1 == None or value2 == None:
        return False
    return value1 == value2

def join(results, collections, join_key):
    """Corresponds to an inner join in SQL.
    Joining scalar with list returns TRUE if the scalar is in the list
    Joining list with scalar returns TRUE if the list contains the scalar
    Joining list with list returns TRUE for every scalar in list 1 that is in list 2.
    """
    join_results = []
    for result in results:
        # get the 'from' key value
        from_value = result.get(join_key[0][1])
        candidates = collections.get(join_key[1][0])
        for candidate in candidates:
            # get the 'to' key value
            to_value = candidate.get(join_key[1][1])

            # scalar on scalar
            if type(from_value) != list and type(to_value) != list:
                if check_join(from_value, to_value):
                    join_results.append({**result, **candidate})
            elif type(from_value) != list and type(to_value) == list:
                if check_join(from_value, to_value):
                    join_results.append({**result, **candidate})
            else:
                for v in from_value:
                    if check_join(v, to_value):
                        join_results.append({**result, **candidate})
            
    return join_results

def cross_product(results, collection):
    """Produce a cross product result."""
    print("WARNING: Generating a cross product. Double check you GraphQL mapping schema!")
    joined_results = []
    for result in results:
        for value in collection:
            joined_results.append({**result, **value})
    return joined_results

def get_initial_collection(collections):
    """Choose the collection to start joining from based on cardinality."""
    initial_collection = None
    min_cardinality = -1
    for name, collection in collections.items():
        if initial_collection == None:
            initial_collection = name
            min_cardinality = len(collection)
        elif len(collection) < min_cardinality:
            initial_collection = name
            min_cardinality = len(collection)
    return initial_collection


def apply_join(collections, graphql_mapping_schema):
    """Apply all joins to a set of collections.
    
    Results contains keys from all collections in the final results.
    """
    # initialize result with one of the collections
    joined_collections = set()
    initial_collection = get_initial_collection(collections)
    joined_collections.add(initial_collection)   
    results = collections[initial_collection]
    
    # get all potential join keys
    join_keys = get_join_keys(graphql_mapping_schema)

    while len(join_keys) > 0:
        join_key = get_next_join_key(joined_collections, join_keys)
        
        # Found no field to join on, resort to cross product...
        if join_key == None:
            for collection_name, collection in collections.items():
                if collection_name in joined_collections:
                    continue
                results = cross_product(results, collection)
                joined_collections.add(collection_name)
                break
        else:
            results = join(results, collections, join_key)
            joined_collections.add(join_key[0][0])
            joined_collections.add(join_key[1][0])
 
    # Add any remaining types using cross product
    for collection_name, collection in collections.items():
        if collection_name in joined_collections:
            continue
        results = cross_product(results, collection)
        joined_collections.add(collection_name)

    return results

def main():
    graphql_endpoint_url = "http://localhost:4000/"
    
    # Generate query
    graphql_mapping_schema = load_schema('./author_schema.graphql')
    rdf_template = ''

    query = build_graphql_query(graphql_mapping_schema)
    
    # Execute query and get results organized as collections
    collections = request(query, graphql_endpoint_url)
    # Filters are executed on collections and reduce their cardinalities
    apply_filters(collections, graphql_mapping_schema)

    # Joins are executed based on @join directives.
    # WARNING: If there exists no valid join key between two collections this is equivalent to producing a cross-product.
    results = apply_join(collections, graphql_mapping_schema)
    print("Result size:", len(results))
    print("Print top 10 results:")
    print(results[:10])

if __name__ == '__main__':
    main()