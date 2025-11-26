const express = require("express");
const router = express.Router();
const { simulateCarbon } = require("../controllers/scoreControllers");

router.post("/calculate", (req, res) => {
    const { runtime, memory, loc, cloud } = req.body; // include cloud
    const result = simulateCarbon(runtime, memory, loc, cloud); // pass cloud
    res.json(result);
});

module.exports = router;
