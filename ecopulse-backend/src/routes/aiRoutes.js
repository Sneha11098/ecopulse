const express = require("express");
const router = express.Router();
const authMiddleware = require("./authmiddleware");
const aiController = require("../controllers/aiController");

router.get("/ai-tips/:userId", authMiddleware, aiController.getAiTips);

module.exports = router;
