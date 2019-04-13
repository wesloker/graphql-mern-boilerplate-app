// Import Database Connection
const connectToDatabase = require('./server/database');
// Import Server
const runExpressServer = require('./server/server');
// Import Models
const models = require('./server/models/schemas/index');
// Import Env Variables
const {
  port,
  debug,
  nodeEnv,
  mongoDB,
  graphQLEndpoint,
} = require('./server/config');
// Connecting To Database
connectToDatabase(mongoDB, debug)
  .then(async () => {
    try {
      // Run Express Server
      await runExpressServer(port, nodeEnv, models, graphQLEndpoint);
    } catch (err) {
      throw new Error(err);
    }
  })
  .catch((err) => {
    throw new Error(err);
  });
