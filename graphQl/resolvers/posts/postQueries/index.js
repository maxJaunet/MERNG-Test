import getPosts from "./getPosts.js"
import getPost from "./getPost.js"

const postQueries = {
  Query: {
    getPost,
    getPosts,
  },
}

export default postQueries;