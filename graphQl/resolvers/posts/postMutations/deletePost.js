import { AuthenticationError } from "apollo-server";
import Post from "../../../../models/Post.js";
import checkAuth from "../../../../util/checkAuth.js";

const deletePost = async (parent, { postId }, context) => {
  const user = checkAuth(context);
  try {
    const post = await Post.findById(postId);
    if (user.username === post.username) {
      await post.delete();
      return 'Post deleted successfully'
    }
    else {
      throw new AuthenticationError('Action not allowed');
    }
  } catch (error) {
    throw new Error(error);
  }
};
export default deletePost;