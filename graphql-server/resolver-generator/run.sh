#!/usr/bin/env bash

# generate GraphQL API schema
cd ../api-generator
python3 graphql-api-generator.py \
    --input ../resources/graphql-library.graphql \
    --output ../resources/graphql-library-api.graphql

# generate resolvers.js
cd ../resolver-generator
python3 generator.py \
    --input ../resources/graphql-library-api.graphql \
    --output ../resources/