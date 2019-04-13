// Sort Keys By Id
module.exports = function sortBy(keys, toSort) {
  return keys.map(key => toSort.find(li => li._doc._id.toString() === key.toString()));
};
