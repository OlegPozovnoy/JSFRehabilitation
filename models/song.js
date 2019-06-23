// We will need our mongoose library
const mongoose = require(`mongoose`);
// Our schema
const SongSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true // we will require a title for our blog
    },
    content: {
      type: String,
      required: false
    },
    status: {
      type: String, //boolean, number, array, and object
      enum: ["DRAFT", "PUBLISHED"],
      default: "DRAFT"
    }
  },
  {
    timestamps: true // we want timestamps to keep track of when our blogs were created
  }
);

module.exports = mongoose.model("Song", SongSchema);
