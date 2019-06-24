const Song = require("../models/song");

exports.new = (req, res) => {
  res.render("songs/new", {
    title: `Add a New Blog ... I mean song`
  });
};

exports.index = (req, res) => {
  Song.find()
    .then(songs => {
      res.render("songs/index", {
        songs: songs,
        title: "Songs list"
      });
    })
    .catch(err => {
      console.error(`ERROR: ${err}`);
    });
};

exports.show = (req, res) => {
  Song.findById(req.params.id)
    .then(song => {
      res.render("songs/show", {
        song: song,
        title: song.name
      });
    })
    .catch(err => {
      console.error(`ERROR: ${err}`);
    });
};

exports.edit = (req, res) => {
  Song.findById(req.params.id)
    .then(song => {
      res.render("songs/edit", {
        title: `Edit ${song.name}`,
        song: song
      });
    })
    .catch(err => {
      console.error(`ERROR: ${err}`);
    });
};

exports.create = (req, res) => {
  Song.create(req.body.song)
    .then(() => {
      req.flash("success", "New song has been added to the list.");
      res.redirect("/songs");
    })
    .catch(err => {
      req.flash("error", `ERROR: ${err}`);
      console.error(`ERROR: ${err}`);
    });
};

exports.update = (req, res) => {
  Song.updateOne(
    {
      _id: req.body.id
    },
    req.body.song,
    {
      runValidators: true
    }
  )
    .then(() => {
      req.flash("success", "The song was updated successfully.");
      res.redirect("/songs");
    })
    .catch(err => {
      req.flash("error", `ERROR: ${err}`);
      console.error(`ERROR: ${err}`);
    });
};

exports.destroy = (req, res) => {
  Song.findByIdAndDelete(req.body.song.id)
    .then(() => {
      req.flash("success", "The song was deleted.");
      res.redirect("/songs");
    })
    .catch(err => {
      req.flash("error", `ERROR: ${err}`);
      console.error(`ERROR: ${err}`);
    });
};

exports.band = (req, res) => {
  Song.find()
    .band(req.params.id)
    .then(songs => {
      res.render("songs/index", {
        songs: songs,
        title: req.params.id
      });
    })
    .catch(err => {
      req.flash("error", `ERROR: ${err}`);
      res.redirect("/");
    });
};

exports.album = (req, res) => {
  console.log(req.params.id);
  Song.find()
    .album(req.params.id)
    .then(songs => {
      res.render("songs/index", {
        songs: songs,
        title: req.params.id
      });
    })
    .catch(err => {
      req.flash("error", `ERROR: ${err}`);
      res.redirect("/");
    });
};

exports.year = (req, res) => {
  Song.find()
    .year(req.params.id)
    .then(songs => {
      res.render("songs/index", {
        songs: songs,
        title: req.params.id
      });
    })
    .catch(err => {
      req.flash("error", `ERROR: ${err}`);
      res.redirect("/");
    });
};

exports.genre = (req, res) => {
  Song.find()
    .genre(req.params.id)
    .then(songs => {
      res.render("songs/index", {
        songs: songs,
        title: req.params.id
      });
    })
    .catch(err => {
      req.flash("error", `ERROR: ${err}`);
      res.redirect("/");
    });
};
