const express = require("express");
const router = express.Router();

const {
  shortenUrl,
  redirectUrl,
  getUrlStats
} = require("../controllers/urlController");

// Create short URL
router.post("/shorten", shortenUrl);

// Redirect short URL → original URL
router.get("/:code", redirectUrl);

// Get analytics (click count, created date)
router.get("/stats/:code", getUrlStats);

module.exports = router;
