import userAuth from "./auth/index.js";
import postMutations from "./posts/postMutations/index.js";
import postQueries from "./posts/postQueries/index.js";
import commentsMutations from "./comments/commentMutations/index.js";
import likesMutations from "./likes/index.js";

const resolvers = {
  Post: {
    likesCount: (parent) => parent.likes.length,
    commentsCount: (parent) => parent.comments.length
  },
  Query: {
    ...postQueries.Query
  },
  Mutation: {
    ...userAuth.Mutation,
    ...postMutations.Mutation,
    ...commentsMutations.Mutation,
    ...likesMutations.Mutation
  }
}

export default resolvers;