const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  nickname: {
    type: String,
    require: true,
    unique: true,
  },
  birthdate: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdNotes: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Note',
    },
  ],
}, { collection: 'users' });

module.exports = mongoose.model('User', UserSchema);
