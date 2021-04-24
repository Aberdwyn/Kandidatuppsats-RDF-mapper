import filtering_utils
import join_utils
import query_utils
import rdf_utils
import schema_utils

def main():
    graphql_endpoint_url = "http://localhost:4000/"
    
    # Generate query
    graphql_mapping_schema = schema_utils.load_schema('./mapping-directives/graphql-mapping-schema.graphql')
    rdf_template = ''

    query = query_utils.build_graphql_query(graphql_mapping_schema)
    
    # Execute query and get results organized as collections
    collections = query_utils.request(query, graphql_endpoint_url)
    # Filters are executed on collections and reduce their cardinalities
    filtering_utils.apply_filters(collections, graphql_mapping_schema)

    # Joins are executed based on @join directives.
    # WARNING: If there exists no valid join key between two collections this is equivalent to producing a cross-product.
    results = join_utils.apply_join(collections, graphql_mapping_schema)
    print("Result size:", len(results))
    print("Print the first 10 results")
    for i in results:
        print(i)
    print()
    
    # Generate RDF
    # apply template
    rdf = rdf_utils.apply_rdf_template("rdf-mapping-schema.txt", results)
    print("Generated RDF:")
    print(rdf)
    

if __name__ == '__main__':
    main()