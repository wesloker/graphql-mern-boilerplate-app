const usersResolver = require('./users');
const notesResolver = require('./notes');

module.exports = {
  ...usersResolver,
  ...notesResolver,
};
