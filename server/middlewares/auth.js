module.exports = (auth, next) => {
  auth ?
    next() :
    'Denegate user'
}