import 'dotenv/config';
import { ApolloServer } from 'apollo-server';
import mongoose from 'mongoose';

import resolvers from './graphQl/resolvers/index.js';
import typeDefs from './graphQl/typeDefs.js';



const server = new ApolloServer({
  typeDefs,
  resolvers 
});

const SERVER_PORT = process.env.PORT | 5000; 


mongoose
  .connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected');
    return server.listen(SERVER_PORT);
  })
  .then((res) => console.log(`server running at ${res.url}`))
  .catch((error) => console.log(error.message));
