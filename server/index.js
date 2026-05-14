require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const http = require("http");
const postRoutes = require("./routes/postRoutes");
const { Server } = require("socket.io");
const aiRoutes = require("./routes/aiRoutes");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

connectDB();

const app = express();

const server = http.createServer(app);

const allowedOrigins = (process.env.CLIENT_URL || "")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

const corsOptions = {
  origin(origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    return callback(new Error(`CORS blocked origin: ${origin}`));
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

const io = new Server(server, {
  cors: {
    origin: allowedOrigins,
    methods: corsOptions.methods,
    credentials: corsOptions.credentials,
  },
  transports: ["websocket", "polling"],
});


// MIDDLEWARE
app.set("trust proxy", 1);

app.use(cors(corsOptions));

app.use(express.json());

app.use(cookieParser());


// ROUTES
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes(io));
app.use("/api/ai", aiRoutes);


// TEST ROUTE
app.get("/", (req, res) => {
  res.send("API Running...");
});

app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    service: "protein-princess-backend",
  });
});


// SOCKET CONNECTION
io.on("connection", (socket) => {

  console.log("User Connected:", socket.id);

  socket.on("joinRoom", (room) => {
    if (typeof room === "string" && room.trim()) {
      socket.join(room);
    }
  });

  socket.on("leaveRoom", (room) => {
    if (typeof room === "string" && room.trim()) {
      socket.leave(room);
    }
  });

  socket.on("disconnect", () => {

    console.log("User Disconnected:", socket.id);

  });

});

app.use((req, res) => {
  res.status(404).json({
    message: "Route not found",
  });
});

app.use((error, req, res, next) => {
  console.error(error);

  res.status(error.status || 500).json({
    message:
      process.env.NODE_ENV === "production"
        ? "Server error"
        : error.message,
  });
});


// SERVER
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {

  console.log(`Server running on port ${PORT}`);

});
