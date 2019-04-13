// Remove duplicate keys
module.exports = function unique(keys) {
  return keys.filter((key, index, array) => array.indexOf(key) === index);
};
