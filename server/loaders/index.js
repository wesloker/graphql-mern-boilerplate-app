// Dataloader
const DataLoader = require('dataloader');
// Utils
const { unique, sortBy } = require('../utils/index');
// Models
const { User, Note } = require('../models/schemas/index');
// Batch Functions
async function batchUsersFn(keys) {
  try {
    await unique(keys);
    const users = await User.find({
      _id: {
        $in: keys,
      },
    });
    const sortedArr = sortBy(keys, users);
    const mappedArr = sortedArr.map(user => ({
      // eslint-disable-next-line no-underscore-dangle
      ...user._doc,
      password: null,
    }));
    return mappedArr;
  } catch (err) {
    throw new Error(err);
  }
}

async function batchNotesFn(keys) {
  try {
    const notes = await Note.find({
      _id: {
        $in: keys,
      },
    });
    const sortedArr = sortBy(keys, notes);
    const mappedArr = sortedArr.map(note => ({
      // eslint-disable-next-line no-underscore-dangle
      ...note._doc,
    }));
    return mappedArr;
  } catch (err) {
    throw new Error(err);
  }
}

// DataLoader Instances
function usersDataLoader() {
  return new DataLoader(batchUsersFn);
}

function notesDataLoader() {
  return new DataLoader(batchNotesFn);
}
// Export Dataloaders
module.exports = {
  usersDataLoader,
  notesDataLoader,
};
