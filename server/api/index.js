const userRouter = require('./user.router');
const noteRouter = require('./note.router');
// Binding Routers With The Server
module.exports = (app) => {
  app
    // User Router
    .use('/api', userRouter)
    // Note Router
    .use('/api', noteRouter);
};
