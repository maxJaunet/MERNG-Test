import Post from "../../../../models/Post.js";

const getSinglePost = async (parent, { postId }) => {
  try {
    const post = await Post.findById(postId);
    if (post) {
      return post;
    }
  } catch (error) {
    throw new Error('Post not found', { error });
  }
}

export default getSinglePost;