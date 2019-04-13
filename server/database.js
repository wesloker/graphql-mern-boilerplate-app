// Mongoose
const mongoose = require('mongoose');
// Export Database
module.exports = async (DBName, debug) => {
  // Database connection
  await mongoose
    // Can Be Connection String Or Template String Connection
    .connect('mongodb://localhost:27017/', {
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      dbName: DBName,
    })
    .then(() => {
      if (Boolean().valueOf(debug)) {
        mongoose.set('debug', true);
      }
      // eslint-disable-next-line no-console
      console.log('Database Connected...');
    });
};
