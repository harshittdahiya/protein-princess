const Post = require("../models/Post");


// CREATE POST
const createPost = async (req, res, io) => {

  try {

    const { user, name, content } = req.body;

    // VALIDATION
    if (!user || !name || !content?.trim()) {
      return res.status(400).json({
        message: "Please fill all fields",
      });
    }

    // CREATE
    const post = await Post.create({
      user,
      name: name.trim(),
      content: content.trim(),
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

    const post = await Post.findByIdAndUpdate(
      req.params.id,
      { $inc: { likes: 1 } },
      { new: true }
    );

    if (!post) {
      return res.status(404).json({
        message: "Post not found",
      });
    }

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
