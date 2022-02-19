import { AuthenticationError, UserInputError } from "apollo-server";
import Post from "../../../../models/Post.js";
import checkAuth from "../../../../util/checkAuth.js";

const deleteComment = async (parent, {postId, commentId}, context) => {
  const { username } = checkAuth(context);
  const post = await Post.findById(postId);
  if (post) {
    const commentIndex = post.comments.findIndex(item => item.id === commentId);
    if (post.comments[commentIndex].username === username) {
      post.comments.splice(commentIndex, 1)
      await post.save()
      return post;
    }
    else {
      throw new AuthenticationError('Action not allowed')
    }
  } 
  else {
    throw new UserInputError('Post not found')
  }
};
export default deleteComment;