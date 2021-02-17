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

const books = [
    {
        id:0,
        title: 'The Awakening',
        author: 'Kate Chopin',
        relatedBookIds: [1]
    },
    {
        id:1,
        title: 'City of Glass',
        author: 'Paul Auster',
        relatedBookIds: [],
    }
  ];

const resolvers = {
    Query: {
      books: () => {
          return books;
      },
    },
    Book: {
        helloWorld: () => "Hej världen!",
        relatedBooks: (parent) => {
            let arr = [];
            for(let book of books){
                if(book.id in parent.relatedBookIds){
                    arr.push(book)
                }
            }
            return arr;
        }
    }
  };

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});