const { ApolloServer, gql } = require('apollo-server');
const express = require('express');

const typeDefs = gql`
  # Definir un tipo Query con un campo llamado hello que devuelve un String
  type Query {
    hello: String
    greet(name: String!): String
  }
`;

const resolvers = {
  Query: {
    hello: () => "Hello, World!",
    greet: (_, { name }) => `Hello, ${name}!`
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();

server.listen().then(({ url }) => {
  console.log(`Servidor corriendo en ${url}`);
});
