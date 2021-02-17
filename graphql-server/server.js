const { ApolloServer, gql } = require('apollo-server');

// This is where we read the graphql schema from file (check out how it's done in woosh graphql server)
const typeDefs = gql`
  type Book {
    title: String
    author: String
    helloWorld: String
    relatedBooks: [Book]
  }

  type Query {
    books(limit:Int = 10): [Book]
  }
`;

// This is where we import data (the global var containing everything!!!)
import { db } from './data/graphql-data.js'

// This is where we import the generated resolvers, using export/import
const resolvers = {
    Query: {
      listOfBooks: () => listOf("Book"),
      listOfPersons: () => listOf("Person"),
      book: (parent, arg) => get(arg.id, "Book")
    },
    Book: {
        //Agent: (parent, arg) =>
        //  __typename =>
    }
  };

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});