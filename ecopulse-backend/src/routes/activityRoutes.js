const express = require("express");
const router = express.Router();
const authMiddleware = require("./authmiddleware");
const activityController = require("../controllers/activityController");

router.post("/log-activity", authMiddleware, activityController.logActivity);
router.get("/carbon-score/:userId", authMiddleware, activityController.getCarbonScore);

module.exports = router;
