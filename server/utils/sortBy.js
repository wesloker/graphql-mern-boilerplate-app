// Sort Keys By Id
module.exports = function sortBy(keys, toSort) {
  // eslint-disable-next-line no-underscore-dangle
  return keys.map(key => toSort.find(el => el._doc._id.toString() === key.toString()));
};
