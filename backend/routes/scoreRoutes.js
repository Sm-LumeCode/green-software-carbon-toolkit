const express = require("express");
const router = express.Router();
const { simulateCarbon } = require("../controllers/scoreControllers");

router.post("/calculate", (req, res) => {
    const { runtime, memory, loc } = req.body;
    const result = simulateCarbon(runtime, memory, loc);
    res.json(result);
});

module.exports = router;