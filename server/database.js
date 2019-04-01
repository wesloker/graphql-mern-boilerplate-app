// Mongo connect middleware
const mongoose = require('mongoose')
// Exporting database
module.exports = (DBName) => {
  // Database connection
  return mongoose
    .connect(`mongodb://localhost/${DBName}`, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: false
    })
    .then(() => {
      console.log('Connected Database...')
    })
}