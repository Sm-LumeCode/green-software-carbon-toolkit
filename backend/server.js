const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

// CRITICAL: Enable CORS
app.use(cors());

// Middleware to parse JSON
app.use(express.json());

// Import your routes
const scoreRoutes = require("./routes/scoreRoutes");
app.use("/api/score", scoreRoutes); 

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});