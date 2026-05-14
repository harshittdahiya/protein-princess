const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


// GENERATE TOKEN
const generateToken = (id) => {
  if (!process.env.JWT_SECRET) {
    throw new Error("Missing JWT_SECRET environment variable");
  }

  return jwt.sign(
    { id },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );
};


// SIGNUP
const signupUser = async (req, res) => {
  try {

    const { name, email, password } = req.body;
    // VALIDATION
if (!name || !email || !password) {
  return res.status(400).json({
    message: "Please fill all fields",
  });
}

// EMAIL CHECK
const normalizedEmail = email.toLowerCase().trim();

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailRegex.test(normalizedEmail)) {
  return res.status(400).json({
    message: "Invalid email format",
  });
}

// PASSWORD LENGTH
if (password.length < 6) {
  return res.status(400).json({
    message: "Password must be at least 6 characters",
  });
}

    // CHECK IF USER EXISTS
    const userExists = await User.findOne({ email: normalizedEmail });

    if (userExists) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    // HASH PASSWORD
    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(password, salt);

    // CREATE USER
    const user = await User.create({
      name: name.trim(),
      email: normalizedEmail,
      password: hashedPassword,
    });

    // RESPONSE
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};


// LOGIN
const loginUser = async (req, res) => {
  try {

    const { email, password } = req.body;
    if (!email || !password) {
  return res.status(400).json({
    message: "Please fill all fields",
  });
}

    // FIND USER
    const user = await User.findOne({ email: email.toLowerCase().trim() });

    if (!user) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }

    // CHECK PASSWORD
    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }

    // RESPONSE
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

module.exports = {
  signupUser,
  loginUser,
};
