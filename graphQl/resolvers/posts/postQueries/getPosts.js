import Post from "../../../../models/Post.js";

const getPosts = async () => {
  try {
    const allPosts = await Post.find().sort({ createdAt: -1 });
    return allPosts;
  } catch (error) {
    throw new Error(error)
  }
};
export default getPosts;