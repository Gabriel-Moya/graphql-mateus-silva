import Post from '../../../models/post'
import User from '../../../models/user'

export default {
  Post: {
    author: (post) => User.findById(post.author),
  },
  Query: {
    posts: () => Post.find(),
    post: (_, { id }) => Post.findById(id),
  },
  Mutation: {
    createPost: (_, { data }) => Post.createPost(data),
    updatePost: (_, { id, data }) => Post.findOneAndUpdate(id, data, { new: true }),
    deletePost: async (_, { id }) => !!(await Post.findOneAndDelete(id)),
  }
}
