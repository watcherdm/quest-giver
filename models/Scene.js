const mongoose = require('mongoose')

const SceneSchema = new mongoose.Schema({
  adventure: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  updated_date: {
    type: Date,
    default: Date.now()
  }
})

module.exports = Scene = mongoose.model('Scene', SceneSchema)