const mongoose = require('mongoose')

const AdventureSchema = new mongoose.Schema({
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

module.exports = Adventure = mongoose.model('Adventure', AdventureSchema)