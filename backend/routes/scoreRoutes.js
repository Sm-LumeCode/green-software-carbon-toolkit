const express = require("express");
const router = express.Router();
const { simulateCarbon } = require("../controllers/scoreControllers");

router.post("/calculate", simulateCarbon);

module.exports = router;
