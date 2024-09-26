const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

// Load environment variables from .env file
dotenv.config();

// Initialize express app
const app = express();

// Middleware
app.use(
  cors({
    credentials: true,
  })
);
app.use(express.json()); // Parse JSON bodies
app.use(bodyParser.json()); // Parse other types of bodies

// Import routes
const authRoutes = require("./routes/authRoutes");
const communityRoutes = require("./routes/communityRoutes");
const articleRoutes = require("./routes/articleRoutes");
const commentRoutes = require("./routes/commentRoutes");

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/communities", communityRoutes);
app.use("/api/articles", articleRoutes);
app.use("/api/comments", commentRoutes);

// Connect to MongoDB
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      process.env.MONGO_URI || "mongodb://localhost/community_db",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Exit process with failure
  }
};

// Start the server and connect to the database
const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
