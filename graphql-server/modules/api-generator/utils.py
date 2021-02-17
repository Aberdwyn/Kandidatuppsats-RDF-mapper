from graphql import *


def is_schema_defined_type(_type: GraphQLType):
    """
    Returns true if _type is a schema-defined GraphQL type.
    :param _type:
    :return:
    """
    if is_input_type(_type) or _type.name.startswith('__') or _type.name == 'Mutation' or _type.name == 'Query':
        return False

    return True


def is_enum_or_scalar(_type: GraphQLType):
    """
    Returns true if a type is an enum or scalar.
    :param _type:
    :return:
    """
    if is_scalar_type(_type) or is_enum_type(_type):
        return True
    return False


def get_argument_as_string(arg_name, arg):
    """
    Returns the argument as string ready for output, including default values if existent
    :param arg_name:
    :param arg:
    :return string:
    """

    ret = f'{arg_name}: {arg.type}'

    # TODO: Correct this when we properly require graphql-core 3.1.1 or higher
    try:
        invalid_or_undefined = INVALID
    except:
        invalid_or_undefined = Undefined

    if arg.default_value != invalid_or_undefined:
        if isinstance(arg.default_value, str):
            ret += f'="{arg.default_value}"'
        else:
            ret += f'={arg.default_value}'

    return ret


def capitalize(string: str):
    """
    Make the first letter of string upper case.
    :param string:
    :return:
    """
    return string[0].upper() + string[1:]


def decapitalize(string: str):
    """
    Make the first letter of string lower case.
    :param string:
    :return:
    """
    return string[0].lower() + string[1:]


def add_query_type(schema: GraphQLSchema):
    return add_to_schema(schema, 'type Query')


def add_to_schema(schema: GraphQLSchema, make: str):
    if make == '':
        return schema
    try:
        schema = extend_schema(schema, parse(make))
    except TypeError as e:
        print(make)
        print(e)
    except SyntaxError as e:
        print(make)
        print(e)

    return schema


def add_id_to_types(schema: GraphQLSchema):
    """
    Extend all object types in the schema with an ID field.
    :param schema:
    :return:
    """
    make = ''
    for _type in schema.type_map.values():
        if not is_schema_defined_type(_type) or is_union_type(_type):
            continue
        if is_interface_type(_type):
            make += f'extend interface {_type.name} {{ id: ID! }} '
        else:
            make += f'extend type {_type.name} {{ id: ID! }} '
    return add_to_schema(schema, make)


def copy_wrapper_structure(_type: GraphQLType, original: GraphQLType):
    """
    Copy the wrapper structure of original to _type.
    :param _type:
    :param original:
    :return:
    """
    wrapped_type = get_named_type(_type)
    # A, A!, [A!], [A]!, [A!]!
    wrappers = []
    if is_non_null_type(original):
        wrappers.insert(0, GraphQLNonNull)
        original = original.of_type
    if is_list_type(original):
        wrappers.insert(0, GraphQLList)
        original = original.of_type
    if is_non_null_type(original):
        wrappers.insert(0, GraphQLNonNull)
        original = original.of_type
    if is_list_type(original):
        wrappers.insert(0, GraphQLList)

    for i in wrappers:
        wrapped_type = i(wrapped_type)

    return wrapped_type


def add_get_queries(schema: GraphQLSchema):
    """
    Add query to get object based on ID.
    :param schema:
    :return:
    """
    # Create queries for object types
    make = ''
    for _type in schema.type_map.values():
        if not is_schema_defined_type(_type):
            continue
        make += f'extend type Query {{ {decapitalize(_type.name)}(id:ID!): {_type.name} }} '
    schema = add_to_schema(schema, make)
    return schema


def add_list_queries(schema: GraphQLSchema):
    """
    Add queries to get list of types.
    :param schema:
    :return:
    """
    make = ''
    for _type in schema.type_map.values():
        if not is_schema_defined_type(_type) or is_list_type(_type) or is_union_type(_type):
            continue
        make += f'extend type Query {{ ' \
            f'   listOf{_type.name}s: [{_type.name}] ' \
            f'}}'
    schema = add_to_schema(schema, make)
    return schema


def ast_type_to_string(_type: GraphQLType):
    """
    Print the ast_type properly
    :param _type:
    :return:
    """

    # ast_nodes types behavies differently than other types (as they are NodeTypes)
    # So we can't use the normal functions

    _post_str = ''
    _pre_str = ''
    # A, A!, [A!], [A]!, [A!]!
    wrappers = []
    if isinstance(_type, NonNullTypeNode):
        _post_str = '!'
        _type = _type.type
    if isinstance(_type, ListTypeNode):
        _post_str = ']' + _post_str
        _pre_str = '['
        _type = _type.type
    if isinstance(_type, NonNullTypeNode):
        _post_str = '!' + _post_str
        _type = _type.type
        
    # Dig down to find the actual named node, should be the first one actually
    name = _type
    while not isinstance(name, NamedTypeNode):
        name = name.type
    name = name.name.value

    return _pre_str + name + _post_str


def print_schema(schema):
    """
    Outputs the given schema as string.
    :param schema
    :return string
    """
    output = ''

    # For each type, and output the types sorted by name
    for _type in sorted(schema.type_map.values(), key=lambda x: x.name):
        # Internal type
        if _type.name.startswith('__'):
            continue

        if is_interface_type(_type):
            output += 'interface ' + _type.name
        elif is_enum_type(_type):
            output += 'enum ' + _type.name
        elif is_scalar_type(_type):
            # Skip non-user defined directives
            if _type.ast_node is not None:
                output += 'scalar ' + _type.name
        elif is_input_type(_type):
            output += 'input ' + _type.name
        elif is_union_type(_type):
            output += 'union ' + _type.name
        else:
            output += 'type ' + _type.name
            if hasattr(_type, 'interfaces') and _type.interfaces:
                output += ' implements '
                output += ' & '.join([interface.name for interface in _type.interfaces])
                
        if is_enum_type(_type):
            # For enums we can get the values directly and add them
            output += ' {\n'
            for value in _type.values: 
                output += '  ' + value + '\n'
            output += '}'

        elif is_union_type(_type):
            # For enums we can get the invloved types directly and add them
            output += ' = '
            output += ' | '.join([inner_type.name for inner_type in _type.types])

        elif not is_enum_or_scalar(_type):
            # This should be a type, or an interface
            # Get directives on type
            output += ' {\n'

            # Get fields
            for field_name, field in _type.fields.items(): 
                output += '  ' + field_name

                # Get arguments for field
                if hasattr(field, 'args') and field.args:
                    args = ', '.join([f'{get_argument_as_string(arg_name, arg)}' for arg_name, arg in field.args.items()])
                    output += f'({args})'

                output += ': ' + str(field.type)
                output += '\n'

            output += '}'

        if _type.ast_node is not None:
            output += '\n\n'

    return output
