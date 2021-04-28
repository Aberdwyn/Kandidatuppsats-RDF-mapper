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