const express = require("express");
const cors = require("cors");
const scoreRoutes = require("./routes/scoreRoutes");

const app = express();

// 🔴 REQUIRED: body parser (fixes req.body undefined)
app.use(express.json());

// 🔴 REQUIRED: CORS for frontend
app.use(cors());

app.use("/api/score", scoreRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
