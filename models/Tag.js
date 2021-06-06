const mongoose = require('mongoose')

const TagSchema = new mongoose.Schema({
  word: {
    type: String,
    required: true
  }
})

module.exports = Tag = mongoose.model('Tag', TagSchema)