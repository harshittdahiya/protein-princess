require("dotenv").config();
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const http = require("http");
const postRoutes = require("./routes/postRoutes");

const { Server } = require("socket.io");
const aiRoutes = require("./routes/aiRoutes");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

dotenv.config();

connectDB();

const app = express();

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  },
});


// MIDDLEWARE
app.use(express.json());

app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);


// ROUTES
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes(io));
app.use("/api/ai", aiRoutes);


// TEST ROUTE
app.get("/", (req, res) => {
  res.send("API Running...");
});


// SOCKET CONNECTION
io.on("connection", (socket) => {

  console.log("User Connected:", socket.id);

  socket.on("disconnect", () => {

    console.log("User Disconnected:", socket.id);

  });

});


// SERVER
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {

  console.log(`Server running on port ${PORT}`);

});