const { ApolloServer } = require('apollo-server');
require('dotenv').config();

const MongoDB = require('./config/db');

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({ req })
});

MongoDB();

server.listen({ port: process.env.PORT || 4000 }).then((res) => {
    console.log(`Server running at ${res.url}`);
});