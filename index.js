const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

const app = express();

// Connect MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 👉 Browser-friendly home page (NO Postman needed)
app.get("/", (req, res) => {
  res.send(`
    <h2>URL Shortener</h2>
    <form method="POST" action="/api/url/shorten">
      <input 
        type="text" 
        name="originalUrl" 
        placeholder="Enter full URL (https://...)" 
        required 
        style="width:300px;padding:8px"
      />
      <br/><br/>
      <button type="submit" style="padding:8px 16px">Shorten</button>
    </form>
  `);
});

// API routes
app.use("/api/url", require("./routes/urlRoutes"));

// Redirect short URL
const { redirectUrl } = require("./controllers/urlController");
app.get("/:code", redirectUrl);

// Port
const PORT = process.env.PORT || 5001;

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
