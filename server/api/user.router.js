// Express Router
const router = require('express').Router();
// Controllers
const uc = require('../controllers/user.controller');
// Set And Export Router
module.exports = router
  // Find One User On Database
  .post('/user', uc.getUser)
  // Find All Users On Database
  .post('/users', uc.getUsers)
  // Create New User On Database
  .post('/user/new', uc.createUser)
  // Update One User On Database
  .post('/user/update', uc.updateUser);
