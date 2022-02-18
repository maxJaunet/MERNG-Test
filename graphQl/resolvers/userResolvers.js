import 'dotenv/config';
import userAuth from './auth/index.js';

const userResolvers = {
  Mutation: {
    ...userAuth.Mutation
  }
};
  
export default userResolvers;
