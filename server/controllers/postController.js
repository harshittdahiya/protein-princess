const Post = require("../models/Post");


// CREATE POST
const createPost = async (req, res, io) => {

  try {

    const { user, name, content } = req.body;

    // VALIDATION
    if (!user || !name || !content) {
      return res.status(400).json({
        message: "Please fill all fields",
      });
    }

    // CREATE
    const post = await Post.create({
      user,
      name,
      content,
    });

    io.emit("newPost", post);

res.status(201).json(post);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};


// GET POSTS
const getPosts = async (req, res) => {

  try {

    const posts = await Post.find()
      .sort({ createdAt: -1 });

    res.status(200).json(posts);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};
// LIKE POST
const likePost = async (req, res, io) => {

  try {

    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({
        message: "Post not found",
      });
    }

    // INCREMENT LIKES
    post.likes += 1;

    await post.save();

    // REALTIME EMIT
    io.emit("postLiked", post);

    res.status(200).json(post);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};


module.exports = {
  createPost,
  getPosts,
  likePost,
};