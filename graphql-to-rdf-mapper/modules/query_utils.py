from schema_utils import *
from gql import gql, Client
from gql.transport.aiohttp import AIOHTTPTransport

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