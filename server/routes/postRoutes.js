const express = require("express");

const {
  createPost,
  getPosts,
  likePost,
} = require("../controllers/postController");

const router = express.Router();

module.exports = (io) => {

  // CREATE POST
  router.post("/", (req, res) => {
    createPost(req, res, io);
  });

  // GET POSTS
  router.get("/", getPosts);

  // LIKE POST
  router.put("/:id/like", (req, res) => {
    likePost(req, res, io);
  });

  return router;

};