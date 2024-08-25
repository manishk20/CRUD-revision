const express = require("express");
const mongoose = require("mongoose");
// const dotenv = require('dotenv');
const userRoutes = require("./routes");

// dotenv.config();

const MONGO_URI = "mongodb://localhost:27017/crud";
// const PORT=9000 used for job server

const app = express();
const port = 5000;

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(MONGO_URI, {})
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

// Routes
app.use('/api', userRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
