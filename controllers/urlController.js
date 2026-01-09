const path = require("path");
const shortid = require("shortid");

const Url = require(path.join(__dirname, "../models/Url.js"));




/**
 * @desc    Create short URL
 * @route   POST /api/url/shorten
 */
exports.shortenUrl = async (req, res) => {
  try {
    const { originalUrl } = req.body;

    if (!originalUrl) {
      return res.status(400).json({ error: "Original URL is required" });
    }

    // Check if URL already exists
    let existingUrl = await Url.findOne({ originalUrl });
    if (existingUrl) {
      return res.status(200).json(existingUrl);
    }

    const shortCode = shortid.generate();

    const newUrl = await Url.create({
      originalUrl,
      shortCode
    });

    res.status(201).json(newUrl);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

/**
 * @desc    Redirect short URL
 * @route   GET /:code
 */
exports.redirectUrl = async (req, res) => {
  try {
    const { code } = req.params;

    const url = await Url.findOne({ shortCode: code });

    if (!url) {
      return res.status(404).json({ error: "Short URL not found" });
    }

    // Increment click count
    url.clicks += 1;
    await url.save();

    res.redirect(url.originalUrl);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

/**
 * @desc    Get URL statistics
 * @route   GET /api/url/stats/:code
 */
exports.getUrlStats = async (req, res) => {
  try {
    const { code } = req.params;

    const url = await Url.findOne({ shortCode: code });

    if (!url) {
      return res.status(404).json({ error: "Short URL not found" });
    }

    res.status(200).json({
      originalUrl: url.originalUrl,
      shortCode: url.shortCode,
      clicks: url.clicks,
      createdAt: url.createdAt
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};
