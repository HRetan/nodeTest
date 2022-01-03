const mongoose = require("mongoose")

const Content = mongoose.model(
  "Content",
  new mongoose.Schema(
    {
      title: { type: String, required: true },
      description: { type: String, required: false },
      user: { type: String, required: true },
    },
    {
      timestamps: true,
    }
  )
)

module.exports = Content
