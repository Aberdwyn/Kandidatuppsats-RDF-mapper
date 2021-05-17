from schema_utils import *

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
    Joining scalar with scalar returns TRUE if the scalar 1 is equal to scalar 2
    Joining scalar with list returns TRUE if the scalar is in the list
    Joining list with scalar returns TRUE if the list contains the scalar
    Joining list with list returns TRUE if any scalar in list 1 is in list 2
    """
    join_results = []
    for result in results:
        # get the 'from' key value
        from_value = result.get(join_key[0][1])
        candidates = collections.get(join_key[1][0])
        for candidate in candidates:
            # get the 'to' key value
            to_value = candidate.get(join_key[1][1])

            if check_join(from_value, to_value):
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

def get_initial_collection(collections, graphql_mapping_schema):
    """Choose the collection to start joining from based on cardinality."""
    initial_collection = None
    min_cardinality = -1
    for name, collection in collections.items():
        print(name, len(collection))
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
    initial_collection = get_initial_collection(collections, graphql_mapping_schema)
    joined_collections.add(initial_collection)   
    results = collections[initial_collection]
    
    # get all potential join keys
    join_keys = get_join_keys(graphql_mapping_schema)

    #print("start from: ", initial_collection)
    while len(join_keys) > 0:
        join_key = get_next_join_key(joined_collections, join_keys)
        #print(join_key)
        # Found no field to join on, resort to union
        if join_key == None:
            continue
        else:
            results = join(results, collections, join_key)
            joined_collections.add(join_key[0][0])
            joined_collections.add(join_key[1][0])
 
    #add any remaining collection using union
    for collection_name, collection in collections.items():
        if collection_name in joined_collections:
            continue

        results += collection
        joined_collections.add(collection_name)

    return results