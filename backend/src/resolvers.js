const User = require('./User');

const users = [
  {id: 1, name: 'Hállan', email: 'hállan.costa1@hotmail.com'},
  {id: 2, name: 'Hállex', email: 'hállan.costa1@hotmail.com'}
];

module.exports = {
  Query: {
    users: () => User.find(),

    user: (_, { id }) => User.findById(id)
  },

  Mutation: {
    createUser: (_, { name, email }) => User.create({ name, email }),
  }
}