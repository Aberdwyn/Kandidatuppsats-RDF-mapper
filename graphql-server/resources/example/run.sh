#!/bin/bash

dir=$(pwd)

# Generate data
cd ../../modules/data-generator
python3 generate-data.py

# Generate API schema
cd ../../modules/api-generator/
python3 generator.py \
    --input $dir/library.graphql \
    --output $dir/library-api.graphql

cd $dir

# Generate resolvers
cd ../../modules/resolver-generator/

python3 generator.py \
    --input $dir/library-api.graphql \
    --output $dir/library-resolvers.js

cd $dir
cd ../..
node server.js
