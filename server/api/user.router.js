// Express Router
const router = require('express').Router();
// User Controller
const uc = require('../controllers/user.controller');

module.exports = router
  // Find One User On Database
  .post('/get-user', uc.getUser)
  // Find All Users On Database
  .post('/get-users', uc.getUsers)
  // Create New User On Database
  .post('/user/new', uc.createUser)
  // Update User On Database
  .post('/user/update', uc.updateUser);
