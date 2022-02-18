import { validateLoginInput } from '../../../util/validators.js';
import { UserInputError } from 'apollo-server';
import generateToken from './generateToken.js';
import bcrypt from 'bcryptjs';
import User from "../../../models/User.js";


const loginMethod = async (parent, { username, password }) => {

  const { errors, valid } = validateLoginInput(username, password);

  if (!valid) {
    throw new UserInputError('Errors', { errors });
  }

  // check if matches an existing user
  const user = await User.findOne({ username });

  if (!user) {
    errors.general = 'User not found';
    throw new UserInputError('User does not exist', { errors });
  }

  // check if the right password was entered
  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    errors.general = 'Wrong password';
    throw new UserInputError('Wrong credentials', { errors });
  }
  const token = generateToken(user);
  return {
    ...user._doc,
    id: user._id,
    token
  }
};

export default loginMethod;