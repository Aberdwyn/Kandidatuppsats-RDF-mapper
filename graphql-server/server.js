const { ApolloServer, gql } = require('apollo-server');

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

import { books } from './data/graphql-data.js'

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