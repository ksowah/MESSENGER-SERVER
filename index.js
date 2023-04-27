const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { createServer } = require('http');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { WebSocketServer } = require('ws');
const { useServer } = require('graphql-ws/lib/use/ws');
const { ApolloServerPluginDrainHttpServer } = require('@apollo/server/plugin/drainHttpServer')
require('dotenv').config();

const MongoDB = require('./config/db');

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const schema = makeExecutableSchema({ typeDefs, resolvers });

const httpServer = createServer(app);

const server = new ApolloServer({
    schema,
    context: ({ req }) => ({ req }),
    plugins: [
        // Proper shutdown for the HTTP server.
        ApolloServerPluginDrainHttpServer({ httpServer }),
    
        // Proper shutdown for the WebSocket server.
        {
          async serverWillStart() {
            return {
              async drainServer() {
                await serverCleanup.dispose();
              },
            };
          },
        },
      ],
});



const wsServer = new WebSocketServer({
    server: httpServer,
    path: '/graphql',
  });

const serverCleanup = useServer({ schema }, wsServer);

  async function startServer() {
    await server.start();
  
    server.applyMiddleware({ app });
  
    MongoDB();

    const PORT = process.env.PORT || 4000; 

    httpServer.listen({ port: PORT }, () =>
      console.log(`Server running at http://localhost:${PORT}${server.graphqlPath}`)
    );
  }

  startServer();
