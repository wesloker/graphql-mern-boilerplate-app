// Import Database Connection
const connectToDatabase = require('./server/database');
// Import Server
const runExpressServer = require('./server/server');
// Import Env Variables
const {
  port,
  nodeEnv,
  graphQLEndpoint,
  mongoDebug,
  mongoDB,
} = require('./server/config');
// Connect to Database
connectToDatabase(mongoDB, mongoDebug)
  .then(async () => {
    try {
      // Run Express Server
      await runExpressServer(port, nodeEnv, graphQLEndpoint);
    } catch (err) {
      throw new Error(err);
    }
  })
  .catch((err) => {
    throw new Error(err);
  });
