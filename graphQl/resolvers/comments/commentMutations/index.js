import createComment from './createComment.js';
import deleteComment from './deleteComment.js';

const commentsMutations = {
  Mutation: {
    createComment,
    deleteComment
  }
}

export default commentsMutations;