#!/bin/bash
python3 ./api-generator/graphql-api-generator.py \
    --input resources/graphql-schema.graphql \
    --output resources/graphql-api-schema.schema

