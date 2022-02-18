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
    },
    getPost: async (parent, { postId }) => {
      try {
        const post = await Post.findById(postId);
        if (post) {
          return post;
        }
      } catch (error) {
        throw new Error('Post not found', { error });
      }
    }
  }
};
  
export default postResolvers;


