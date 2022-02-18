import { validateRegisterInput } from '../../../util/validators.js';
import { UserInputError } from 'apollo-server';
import generateToken from './generateToken.js';
import bcrypt from 'bcryptjs';
import User from "../../../models/User.js";



const registerMethod = async (parent, { registerInput: { username, email, password, confirmPassword } }) => {
 
  // validate userData
  const { valid, errors } = validateRegisterInput(username, email, password, confirmPassword);
  if (!valid) {
    throw new UserInputError('Errors', { errors })
  }

  // Make sure user does'nt already exists
  const foundUser = await User.findOne({ username });
  if (foundUser) {
    throw new UserInputError('Username is taken', {
      errors: {
        username: 'This username is taken'
      }
    })
  }
 
  // hash password and create auth token
  password = await bcrypt.hash(password, 12);
  const newUser = new User({
    email,
    username,
    password,
    createdAt: new Date().toISOString()
  });

  const res = await newUser.save();
  const token = generateToken(res);
  return {
    ...res._doc,
    id: res._id,
    token
  }
}


export default registerMethod;