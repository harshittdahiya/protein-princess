const express = require("express");

const {
  signupUser,
  loginUser,
} = require("../controllers/authController");

const router = express.Router();


// SIGNUP ROUTE
router.post("/signup", signupUser);


// LOGIN ROUTE
router.post("/login", loginUser);


module.exports = router;