import createPost from "./createPost.js";
import deletePost from "./deletePost.js";

const postMutations = {
  Mutation: {
    createPost,
    deletePost
  }
}

export default postMutations;