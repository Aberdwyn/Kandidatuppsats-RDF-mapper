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

def decapitalize(string: str):
    """
    Make the first letter of string lower case.
    :param string:
    :return:
    """
    return string[0].lower() + string[1:]

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

def applyContainsFilter(collection, field, graphql_mapping_schema):
    values = get_directive_values_from_field(graphql_mapping_schema, field, "contains")
    if values == None:
        return collection
        
    field_name = field.ast_node.name.value
    field_type = get_named_type(field.type)
    if is_user_defined_type(field_type):
        # it's an object, use id
        value = values["id"]
    else:
        # field_type_name is only used to find the correct argument in "values"
        field_type_name = field_type.ast_node.name.value
        value = values[field_type_name.lower()]

    filter_collection = []
    for document in collection:
        if not is_list_type(field.type):
            print("WARNING: Applying @contains on non-list field!")
            break
        
        if is_user_defined_type(field_type):
            for v in document[field_name]:
                if v["id"] == value:
                    filter_collection.append(document)
        elif value in document[field_name]:
            filter_collection.append(document)

    return filter_collection

def applyEqualsFilter(collection, field, graphql_mapping_schema):
    """Return the subset of the collection that matches the @equals directive.
    If no equals directive is present, return the original collection.

    What do we mean by:
    name: [String] @equals(string:"Robin")
    1: All values in list must equal "Robin"?
    2: A value has to equals "Robin" (do we keep or throw away the rest?)
    Suggestion: @equals applies to a single value only. Maybe use @all/@any for lists?
    """
    values = get_directive_values_from_field(graphql_mapping_schema, field, "equals")
    if values == None:
        return collection
        
    filter_collection = []
    for document in collection:
        key = field.ast_node.name.value
        field_type = get_named_type(field.type)
        
        # TODO: Cover object equals (i.e. added ID structure)
        hit = False
        for value in values.values():
            if document[key] != value:
                hit = False
                break
            hit = True
            
        if hit:
            filter_collection.append(document)

    return filter_collection

def applyLTFilter(collection, field, graphql_mapping_schema):
    """Return the subset of the collection that matches the @LT directive.
    LT = Less than (only works on integers at this moment)
        Should it work on lists?
    If no LT directive is present, return the original collection.
    """
    values = get_directive_values_from_field(graphql_mapping_schema, field, "lt")
    if values == None:
        return collection
    
    filter_collection = []
    for document in collection:
        key = field.ast_node.name.value
        field_type = get_named_type(field.type)

        if document[key] == None:
            continue

        for value in values.values():
            if document[key] < value:
                filter_collection.append(document)

    return filter_collection

def applyGTFilter(collection, field, graphql_mapping_schema):
    """Return the subset of the collection that matches the @GT directive.
    GT = Less than (only works on integers at this moment)
        Should it work on lists?
    If no GT directive is present, return the original collection.
    """
    values = get_directive_values_from_field(graphql_mapping_schema, field, "gt")
    if values == None:
        return collection
    
    filter_collection = []
    for document in collection:
        key = field.ast_node.name.value
        field_type = get_named_type(field.type)

        if document[key] == None:
            continue

        for value in values.values():
            if document[key] > value:
                filter_collection.append(document)

    return filter_collection

def applyFilters(results, graphql_mapping_schema):
    # { listOfX: [], listOfY: [] }
    # For each result, apply filters for each collection
    filtered_results = {}
    for type_name, graphql_type in graphql_mapping_schema.type_map.items():
        # Skip system defined types
        if not is_user_defined_type(graphql_type):
            continue
        
        # Grab the target collection from the result
        collection_name = decapitalize(type_name) + "s"
        collection = results[collection_name]

        # Iterate the fields of the type
        for field_name, field in graphql_type.fields.items():
            # apply filters (replaces collection)
            collection = applyEqualsFilter(collection, field, graphql_mapping_schema)
            collection = applyContainsFilter(collection, field, graphql_mapping_schema)
            collection = applyLTFilter(collection, field, graphql_mapping_schema)
            collection = applyGTFilter(collection, field, graphql_mapping_schema)


        filtered_results[collection_name] = collection
    return filtered_results

def build_graphql_query(graphql_mapping_schema):
    """Build a GraphQL query based on a GraphQL mapping schema."""
    query = "query {"
    for type_name, graphql_type in graphql_mapping_schema.type_map.items():
        # Only generate for user defined types
        if not is_user_defined_type(graphql_type):
            continue

        query_fields = ""
        for field_name, field in graphql_type.fields.items():
            # If the field points to a user defined type we need to grab the ID
            if is_user_defined_type(get_named_type(field.type)):
                query_fields += "\n    " + field_name + " { id }"
            else:
                query_fields += "\n    " + field_name
        
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

def main():
    # Example
    # directive_values = get_directive_values_from_names(graphql_mapping_schema, "Book", "authors", "equals")
    # values = get_directive_values_from_field(graphql_mapping_schema, field, "equals")
    
    # Generate query
    graphql_mapping_schema = load_schema('./author_schema.graphql')
    query = build_graphql_query(graphql_mapping_schema)
    
    # Execute query
    graphql_endpoint_url = "http://localhost:4000/"
    results = request(query, graphql_endpoint_url)

    filtered_results = applyFilters(results, graphql_mapping_schema)
    print(filtered_results["books"])
    print(filtered_results["authors"])
    #results = [ result ]

    # Apply filters
    #print(len(results[0]["listOfAuthors"]))
    #results = applyFilters(results, graphql_mapping_schema)
    #print(results[0]["listOfAuthors"])
    
    # Apply cross product explosion
    #cross = cross_product_split(result)

def cross_product_split(result):
    pass

if __name__ == '__main__':
    main()