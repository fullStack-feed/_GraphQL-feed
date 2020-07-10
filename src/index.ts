import express from 'express';
import {ApolloServer} from 'apollo-server-express';
import { typeDefs, resolvers } from './graphql';

const app = express();
const post = 9000;

const server = new ApolloServer({typeDefs,resolvers});

server.applyMiddleware({app,path: '/api'});
app.listen(post);