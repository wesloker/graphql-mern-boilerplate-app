// Import App Routers
const userRouter = require('./user.router');
const noteRouter = require('./note.router');

module.exports = (app) => {
  app
    // User Router
    .use('/api', userRouter)
    // Note Router
    .use('/api', noteRouter);
};
