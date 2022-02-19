import { UserInputError } from "apollo-server";
import Post from "../../../../models/Post.js";
import checkAuth from "../../../../util/checkAuth.js";

const createPost = async (parent, { body }, context) => {
  const user = checkAuth(context);
  if (body.trim() === '') {
    throw new UserInputError('This field must not be empty')
  }
  const newPost = new Post({
    body,
    user: user.id,
    username: user.username,
    createdAt: new Date().toISOString()
  })
  const post = await newPost.save();
  return post
};

export default createPost;