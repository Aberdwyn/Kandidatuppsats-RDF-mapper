import sys
import filtering_utils
import join_utils
import query_utils
import rdf_utils
import schema_utils

def main(graphql_mapping_schema, rdf_mapping_schema):
    graphql_endpoint_url = "http://localhost:4000/"
    
    # Generate query
    graphql_mapping_schema = schema_utils.load_schema(graphql_mapping_schema)
    #rdf_template = ''

    query = query_utils.build_graphql_query(graphql_mapping_schema)
    # Execute query and get results organized as collections
    collections = query_utils.request(query, graphql_endpoint_url)
    
    #remove none values
    filtering_utils.remove_none_values(collections)

    # Filters are executed on collections and reduce their cardinalities
    filtering_utils.apply_filters(collections, graphql_mapping_schema)

    # Joins are executed based on @join directives.
    # WARNING: If there exists no valid join key between two collections this is equivalent to producing a cross-product.
    results = join_utils.apply_join(collections, graphql_mapping_schema)
    print("Result size:", len(results))
    #print("Print the first 10 results")
    #for i in range(10):
    #    print(results[i])
    print()
    
    # Generate RDF
    # apply template
    rdf_utils.apply_rdf_template(rdf_mapping_schema, results)
    print("See rdf.nt for generated RDF.")

    

if __name__ == '__main__':
    main(sys.argv[1:][0], sys.argv[1:][1])