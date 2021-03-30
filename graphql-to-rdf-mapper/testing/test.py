from graphql import build_ast_schema
from graphql.language.parser import parse

def parse_schema(file):
    return build_ast_schema(parse(file))

with open('./title_schema.graphql') as source:
    schema = parse_schema(source.read())

#print(schema)
print(schema.get_directive("equals"))






from gql import gql, Client
from gql.transport.aiohttp import AIOHTTPTransport

# Select your transport with a defined url endpoint
transport = AIOHTTPTransport(url="http://localhost:4000/")

# Create a GraphQL client using the defined transport
client = Client(transport=transport, fetch_schema_from_transport=True)

# Provide a GraphQL query
query = gql(
    """
    query {
      listOfBooks {
        title
        id
      }
    }
"""
)

# Execute the query on the transport
result = client.execute(query)
#print(result["listOfBooks"][0])
print(result)

def export_values(data):
  for query in data:
    for res in data[query]:

      #'title' = det attribut i mappningsschemat som directivet finns på
      #"Tale of Magic" = det som står efter direktivet equals
      if res['title'] == "Tale of Magic":
        print(res)

export_values(result)
