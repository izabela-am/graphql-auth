import 'reflect-metadata';

import { createServer } from 'http';
import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';

import { app } from './app';

import { UserResolver } from './resolvers/UserResolver';
import { User } from './schemas/User';

async function bootstrap(typeDefs: any, resolvers: any) {
  const httpServer = createServer(app);

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })]
  });

  await server.start();
  server.applyMiddleware({ app });

  httpServer.listen({ port: 3333 }, () => console.log('🚀 Server ready on port 3333'));
}

bootstrap(User, UserResolver);
