// We will need our mongoose library
const mongoose = require(`mongoose`);
// Our schema
const SongSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true // we will require a title for our blog
    },
    band: {
      type: String,
      required: true
    },
    album: {
      type: String,
      required: true
    },
    year: {
      type: String,
      required: true
    },
    genre: {
      type: String, //boolean, number, array, and object
      enum: [
        "Blues",
        "Electronic",
        "Hip hop",
        "Jazz",
        "Pop",
        "R&B",
        "Rock",
        "Other"
      ],
      default: "Other"
    },
    length: {
      type: String, //boolean, number, array, and object
      required: false
    }
  },
  {
    timestamps: true // we want timestamps to keep track of when our blogs were created
  }
);

SongSchema.query.band = function(band) {
  return this.where({
    band: band
  });
};

SongSchema.query.album = function(album) {
  return this.where({
    album: album
  });
};

SongSchema.query.year = function(year) {
  return this.where({
    year: year
  });
};

SongSchema.query.genre = function(genre) {
  return this.where({
    genre: genre
  });
};

module.exports = mongoose.model("Song", SongSchema);
