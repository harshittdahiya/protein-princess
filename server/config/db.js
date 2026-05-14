const mongoose = require("mongoose");

const connectDB = async () => {
  try {

    if (!process.env.MONGO_URI) {
      throw new Error("Missing MONGO_URI environment variable");
    }

    const conn = await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 10000,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);

  } catch (error) {

    console.error("MongoDB connection failed:", error.message);
    process.exit(1);

  }
};

module.exports = connectDB;
