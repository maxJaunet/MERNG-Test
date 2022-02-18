import Post from '../../models/Post.js';

const postResolvers = {
  Query: {
    getPosts: async () => {
      try {
        const allPosts = await Post.find();
        return allPosts;
      } catch (error) {
        throw new Error(error)
      }
    }
  }
};
  
export default postResolvers;


