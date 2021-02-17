import argparse

from graphql import (
    build_schema,
    is_object_type,
    get_named_type,
    is_interface_type,
    assert_valid_schema,
    is_input_type,
    is_union_type
)
from mako.template import Template
import sys


def is_schema_defined_object_type(t):
    return is_object_type(t) and t.name[0] != '_' and \
        t.name not in ['Mutation', 'Query']


def generate(input_file, output_file):
    # load schema
    with open(input_file, 'r') as f:
        schema_string = f.read()
    schema = build_schema(schema_string)

    data = {'types': [], 'interfaces': [], 'unions': []}

    # get list of types
    for type_name, _type in schema.type_map.items():
        if is_interface_type(_type):
            t = {'name': type_name, 'possible_types': []}
            for possible_type in schema.get_possible_types(_type):
                t['possible_types'].append(possible_type.name)
            data['interfaces'].append(t)

        if is_union_type(_type):
            t = {'name': type_name, 'types': []}
            data['unions'].append(t)

        if is_schema_defined_object_type(_type):
            t = {'name': type_name, 'fields': []}
            # add object fields
            for field_name, field_type in _type.fields.items():
                inner_field_type = get_named_type(field_type.type)

                if is_schema_defined_object_type(inner_field_type) or \
                        is_interface_type(inner_field_type) or \
                        is_union_type(inner_field_type):
                    t['fields'].append(field_name)

            sort_before_rendering(t)
            data['types'].append(t)

    # sort
    data['types'].sort(key=lambda x: x['name'])
    data['interfaces'].sort()
    data['unions'].sort()

    # apply template
    template = Template(filename=f'resources/resolver.template')
    if output_file is None:
        print(template.render(data=data))
    else:
        with open(output_file, 'w') as f:
            updated_schema_string = template.render(data=data)
            api_schema = build_schema(schema_string)
            assert_valid_schema(api_schema)
            f.write(updated_schema_string)


def sort_before_rendering(d: dict):
    """
    Sort all list values to allow consistent generation of resolver files.
    :param d:
    :return:
    """
    for k in d:
        if type(d[k]) is not list or not len(d[k]):
            continue
        if type(d[k][0] == tuple):
            d[k].sort(key=lambda x: x[0].replace("_", "}"))
        else:
            d[k].sort(key=lambda x: x.replace("_", "}"))


def cmd(args):
    generate(args.input, args.output)


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('--input', type=str, required=True,
        help='GraphQL API schema file')
    parser.add_argument('--output', type=str,
        help='Output resolver file (default stdout)')
    cmd(parser.parse_args())
