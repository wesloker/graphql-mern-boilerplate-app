// Notes Resolver
module.exports = {
  async creator(parent, _args, { loaders }) {
    try {
      return loaders.usersLoader.load(parent.creator.toString());
    } catch (err) {
      throw new Error(err);
    }
  },
  async note(_parent, args, { models }) {
    try {
      let dataType = Object.keys(args)[0];
      dataType = dataType === 'id' ? '_'.concat(dataType) : dataType;
      const dataValue = Object.values(args);
      const note = await models.Note.findOne({
        [dataType]: dataValue,
      });
      return note;
    } catch (err) {
      throw new Error(err);
    }
  },
  async notes(_parent, _args, { models }) {
    try {
      const notes = await models.Note.find();
      return notes;
    } catch (err) {
      throw new Error(err);
    }
  },
  async createNote(_parent, { input }, { models }) {
    try {
      const date = new Date().toDateString();
      Object.assign(input, date);
      const note = new models.Note({
        ...input,
      });
      await note.save();
      await models.User.findOneAndUpdate(
        {
          _id: input.creator,
        },
        {
          $push: {
            createdNotes: note._doc._id,
          },
        },
        {
          new: true,
        },
      );
      return note;
    } catch (err) {
      throw new Error(err);
    }
  },
  async updateNote(_parent, args, { models }) {
    try {
      const { id: _id } = args;
      delete args.id;
      const date = new Date().toDateString();
      Object.assign(args, date);
      const note = await models.Note.findOneAndUpdate(
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
      return note;
    } catch (err) {
      throw new Error(err);
    }
  },
};
