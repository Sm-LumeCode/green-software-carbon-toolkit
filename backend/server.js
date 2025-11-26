const express = require("express");
const app = express();
const PORT = 5000;

// Middleware to parse JSON
app.use(express.json());

// Import your routes
const scoreRoutes = require("./routes/scoreRoutes");
app.use("/carbon", scoreRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


