require("dotenv").config();
const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the public directory
app.use(express.static("public"));

// Serve the HTML file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Create a route to expose the Google Maps API key
app.get("/config", (req, res) => {
  res.json({
    GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY,
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
