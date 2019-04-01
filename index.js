// Importing Database Connection
const connectDatabase = require('./server/database')
// Importing Server
const runExpressServer = require('./server/server')
// Importing Env Variables
const {
  port,
  nodeEnv,
  mongoDB
} = require('./server/config')
// Connecting To Database
connectDatabase(mongoDB)
  .then(() => {
    // Running Express Server
    runExpressServer(port, nodeEnv)
  })
  .catch(err => {
    console.log(err)
  })