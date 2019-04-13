// Express Router
const router = require('express').Router();
// Note Controller
const nc = require('../controllers/note.controller');

module.exports = router
  // Find One Note On Database
  .post('/get-note', nc.getNote)
  // Find All Notes On Database
  .post('/get-notes', nc.getNotes)
  // Create New Note On Database
  .post('/note/new', nc.createNote)
  // Update Note On Database
  .post('/note/update', nc.updateNote);
