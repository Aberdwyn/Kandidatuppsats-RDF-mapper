const { readFileSync } = require('fs');
const { ApolloServer, gql, } = require('apollo-server');

// Remember to generate resolvers and API schema using resources/example/run.sh

// Load the example schema
const schema_string = readFileSync('./resources/example/library-api.graphql', 'utf8');
const typeDefs = gql`${schema_string}`;
// Load the example database
const db = require('./modules/data-generator/data/graphql-data.js');
const { defaultFieldResolver } = require('graphql');
//const db  = require('./resources/example/library-db.js');
// Load resolvers, pass the database!
const { getResolvers } = require('./resources/example/library-resolvers.js', 'utf8');
const resolvers = getResolvers(db);

// Set up server
const server = new ApolloServer({ typeDefs, resolvers, });

// Start server
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});