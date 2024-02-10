const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const boardItemRoutes = require("./routes/boardItemRoutes");

const app = express();

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://admin:yWH0d7y8uvH63J7b@demo.edxpbsr.mongodb.net/?retryWrites=true&w=majority"
  )
  .then((data) => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB");
    console.log(err);
  });

// Middleware
app.use(express.json());

// Routes
app.get("/api", (req, res) => {
  res.send("API for Monday.com integration");
});

app.use("/api/web-hooks", boardItemRoutes);

// Start the server
const PORT = process.env.PORT || 8030;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
