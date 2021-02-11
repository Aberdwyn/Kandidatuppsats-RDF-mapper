#!/usr/bin/env python3
import argparse
import os
from io import UnsupportedOperation
from utils.utils import *


def cmd(args):
    # get list of schema files
    myfile = args.input
    # build schema
    schema_string = ''
    with open(myfile, 'r') as f:
        schema_string += f.read() + '\n'
    schema = build_schema(schema_string)

    # run
    schema = run(schema)

    # write to file or stdout
    if args.output:
        with open(args.output, 'w') as out:
            out.write(print_schema(schema))
    else:
        print(print_schema(schema))


def run(schema: GraphQLSchema):
    # API generation
    schema = add_query_type(schema)
    schema = add_id_to_types(schema)
    schema = add_get_queries(schema)
    schema = add_list_queries(schema)
    return schema


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('--input', type=str, required=True, help='A GraphQL DB schema file')
    parser.add_argument('--output', type=str, help='Output schema file (default stdout)')
    parser.add_argument('--config', type=str, help='Path to configuration file')
    cmd(parser.parse_args())
