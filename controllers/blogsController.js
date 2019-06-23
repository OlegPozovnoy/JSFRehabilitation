const Blog = require("../models/blog");

exports.new = (req, res) => {
  res.render("blogs/new", {
    title: `New Blog Post`
  });
};

exports.create = (req, res) => {
  Blog.create(req.body.blog)
    .then(() => {
      res.redirect("/blogs");
    })
    .catch(err => {
      console.error(`ERROR: ${err}`);
    });
};

exports.index = (req, res) => {
  Blog.find()
    .then(blogs => {
      res.render("blogs/index", {
        blogs: blogs,
        title: "Archive"
      });
    })
    .catch(err => {
      console.error(`ERROR: ${err}`);
    });
};

exports.show = (req, res) => {
  Blog.findById(req.params.id)
    .then(blog => {
      res.render("blogs/show", {
        blog: blog,
        title: blog.title
      });
    })
    .catch(err => {
      console.error(`ERROR: ${err}`);
    });
};

exports.drafts = (req, res) => {
  Blog.find()
    .drafts()
    .then(drafts => {
      res.render("blogs/index", {
        blogs: drafts,
        title: "Drafts"
      });
    })
    .catch(err => {
      console.error(`ERROR: ${err}`);
    });
};

exports.published = (req, res) => {
  Blog.find()
    .published()
    .then(published => {
      res.render("blogs/index", {
        blogs: published,
        title: "Published"
      });
    })
    .catch(err => {
      console.error(`ERROR: ${err}`);
    });
};
