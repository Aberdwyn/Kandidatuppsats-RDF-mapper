const { readFileSync } = require('fs');
const { ApolloServer, gql, SchemaDirectiveVisitor } = require('apollo-server');

//Directives TODO: Find a fancy way to import these.
class UpperCaseDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field) {
    const { resolve = defaultFieldResolver } = field;
    field.resolve = async function (...args) {
      const result = await resolve.apply(this, args);
      if (typeof result === 'string') {
        return result.toUpperCase();
      }
      return result;
    };
  }
}

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
const server = new ApolloServer({ typeDefs, resolvers, schemaDirectives: {upper: UpperCaseDirective,} });

// Start server
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});