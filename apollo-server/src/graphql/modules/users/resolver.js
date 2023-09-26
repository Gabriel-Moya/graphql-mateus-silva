import User from '../../../models/user'

export default {
  User: {
    fullName: (user) => `${user.firstName} ${user.lastName}`
  },
  Query: {
    users: () => User.find(),
    user: (_, { id }) => User.findById(id),
  },
  Mutation: {
    createUser: (_, { data }) => User.createUser(data),
    updateUser: (_, { id, data }) => User.findOneAndUpdate(id, data, { new: true }),
    deleteUser: async (_, { id }) => !!(await User.findOneAndDelete(id)),
  }
}
