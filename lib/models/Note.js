const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    maxlength: 180,
    minlength: 1,
    required: true
  },
  body: {
    type: String,
    maxlength: 2000,
    required: true
  }
});

module.exports = mongoose.model('Note', noteSchema);
