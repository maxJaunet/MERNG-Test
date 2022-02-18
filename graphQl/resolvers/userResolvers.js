import 'dotenv/config';
import User from "../../models/User.js";
import bcrypt from 'bcryptjs'
import jwt from "jsonwebtoken";
import { UserInputError } from 'apollo-server';
import { validateRegisterInput, validateLoginInput } from '../../util/validators.js';
import userAuth from './auth/index.js';


const userResolvers = {
  Mutation: {
    ...userAuth.Mutation
  }
  // Mutation: {
  //   login: async (parent, { username, password }) => {

  //     const { errors, valid } = validateLoginInput(username, password);

  //     if (!valid) {
  //       throw new UserInputError('Errors', { errors });
  //     }

  //     // check if matches an existing user
  //     const user = await User.findOne({ username });

  //     if (!user) {
  //       errors.general = 'User not found';
  //       throw new UserInputError('User does not exist', { errors });
  //     }

  //     // check if the right password was entered
  //     const passwordMatch = await bcrypt.compare(password, user.password);
  //     if (!passwordMatch) {
  //       errors.general = 'Wrong password';
  //       throw new UserInputError('Wrong credentials', { errors });
  //     }
  //     const token = generateToken(user);
  //     return {
  //       ...user._doc,
  //       id: user._id,
  //       token
  //     }
  //   },

  //   register: async (parent, { registerInput: { username, email, password, confirmPassword } }, context, info) => {
  //     // validate userData
  //     const { valid, errors } = validateRegisterInput(username, email, password, confirmPassword);
  //     if (!valid) {
  //       throw new UserInputError('Errors', { errors })
  //     }

  //     // Make sure user does'nt already exists
  //     const foundUser = await User.findOne({ username });
  //     if (foundUser) {
  //       throw new UserInputError('Username is taken', {
  //         errors: {
  //           username: 'This username is taken'
  //         }
  //       })
  //     }

  //     // hash password and create auth token
  //     password = await bcrypt.hash(password, 12);

  //     const newUser = new User({
  //       email,
  //       username,
  //       password,
  //       createdAt: new Date().toISOString()
  //     });

  //     const res = await newUser.save();
  //     const token = generateToken(res);
  //     return {
  //       ...res._doc,
  //       id: res._id,
  //       token
  //     }
  //   }
  // }
};
  
export default userResolvers;
