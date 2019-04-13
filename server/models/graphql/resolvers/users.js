// Bcrypt Lib
const bcrypt = require('bcryptjs');
// Users Resolver
module.exports = {
  async createdNotes(parent, _args, { loaders }) {
    try {
      return loaders.notesLoader.loadMany(parent.createdNotes);
    } catch (err) {
      throw new Error(err);
    }
  },
  async user(_parent, args, { models }) {
    try {
      let dataType = Object.keys(args)[0];
      dataType = dataType === 'id' ? '_'.concat(dataType) : dataType;
      const dataValue = Object.values(args)[0];
      const user = await models.User.findOne({
        [dataType]: dataValue,
      });
      return {
        ...user._doc,
        password: null,
      };
    } catch (err) {
      throw new Error(err);
    }
  },
  async users(_parent, _args, { models }) {
    try {
      const users = await models.User.find();
      users.map((user) => {
        user.password = null;
        return user;
      });
      return users;
    } catch (err) {
      throw new Error(err);
    }
  },
  async createUser(_parent, { input }, { models }) {
    try {
      const hashedPassword = await bcrypt.hash(input.password, 12);
      input.password = hashedPassword;
      const user = new models.User({
        ...input,
      });
      return {
        ...user._doc,
        password: null,
      };
    } catch (err) {
      throw new Error('User not saved.');
    }
  },
  async updateUser(_parent, args, { models }) {
    try {
      const { id: _id } = args;
      delete args.id;
      const user = await models.User.findOneAndUpdate(
        {
          _id,
        },
        {
          ...args,
        },
        {
          new: true,
        },
      );
      return user;
    } catch (err) {
      throw new Error(err);
    }
  },
};
