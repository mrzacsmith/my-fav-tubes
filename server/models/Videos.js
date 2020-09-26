const mongoose = require('mongoose')

const VideoSchema = new mongoose.Schema(
  {
    url: { type: String, unique: true, trim: true },
    votes: { type: Number },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Video', VideoSchema)
