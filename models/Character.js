const mongoose = require('mongoose')

const CharacterSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
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
  },
  campaign_id: {
    type: String,
    default: null
  },
  owner_id: {
    type: String,
    default: null
  }
})

module.exports = Character = mongoose.model('Character', CharacterSchema)