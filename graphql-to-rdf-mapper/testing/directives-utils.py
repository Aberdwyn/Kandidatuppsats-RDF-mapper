from graphql import \
    build_ast_schema, \
    GraphQLSchema, \
    get_directive_values, \
    is_object_type, \
    is_introspection_type, \
    is_interface_type, \
    is_union_type, \
    get_named_type
from graphql.language.parser import parse


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
    

def build_graphql_query(graphql_mapping_schema):
    """Build a GraphQL query based on a mapping.
    Only fields referenced by one of the directives @export, @equals, ...
    are included. All exported fields are renamed according to the @export directive.
    """
    query = "query {"
    for type_name, graphql_type in graphql_mapping_schema.type_map.items():
        # only generate for user defined types
        if not is_user_defined_type(graphql_type):
            continue

        included_fields = [] 
        query_fields = ""
        for field_name, field in graphql_type.fields.items():
            # Include fields only once in a query
            if field_name in included_fields:
                continue
            
            # Get the inner type of the field type
            # If it's a user defined type we need to grab the ID from this object
            named_field_type = get_named_type(field.type)
            
            # Check @export
            values = get_directive_values_from_field(graphql_mapping_schema, field, "export")
            if values:
                if is_user_defined_type(named_field_type):
                    query_fields += "\n    " + field_name + " { " + values["as"] + ":id }"
                else:
                    query_fields += "\n    " + values["as"] + ":" + field_name
                included_fields.append(field_name)
                continue
            
            # Check @equals
            values = get_directive_values_from_field(graphql_mapping_schema, field, "equals")
            if values:
                if is_user_defined_type(named_field_type):
                    query_fields += "\n    " + field_name + " { id }"
                else:
                    query_fields += "\n    " + field_name
                included_fields.append(field_name)
                continue


        if query_fields != "":
            query += "\n  listOf" + type_name + "s {" + query_fields + "\n  }"
    query += "\n}"
    return query
    

def main():
    # Example
    # directive_values = get_directive_values_from_names(graphql_mapping_schema, "Book", "authors", "equals")

    # Note: The loaded schema will contain all directives but they are not printed when using print_schema
    graphql_mapping_schema = load_schema('./author_schema.graphql')
    # Create query
    query = build_graphql_query(graphql_mapping_schema)
    print(query)
    # Execute query
    # results = request(query, url)

    # After getting the data, we need to apply our constraints. This is a bit tricky. Maybe it's easier to
    # put into our own structure?
    # To simply filter on "equals" some value, we can iterate all types and drop all
    # results where the constraint is not fulfilled.
    # E.g.
    # applyEqualsFilter(graphql_mapping_schema, results)
    # applyEqualsFilter
    # 1) iterate the fields in the schema and construct the "key structure" to access the data in results
    # and keep the value of each "equals" handy
    # 2) Iterate the data using the captured key structures. Drop all values that do not conform to the
    # equals value.

if __name__ == '__main__':
    main()