const express = require("express");
const router = express.Router();
const { simulateCarbon } = require("../controllers/scoreControllers");

router.post("/calculate", (req, res) => {
    const { runtime, memory, loc, cloud } = req.body; 
    const result = simulateCarbon(runtime, memory, loc, cloud); 
    res.json(result);
});

module.exports = router;
