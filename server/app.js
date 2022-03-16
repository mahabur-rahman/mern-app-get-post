const express = require("express");
const app = express();
const dotenv = require("dotenv");
const router = require("./routes/auth");
const cors = require("cors");
// env file
dotenv.config({ path: "./config.env" });
const PORT = process.env.PORT || 5000;
// connect
require("./db/connect");

// middleware
app.use(express.json());
app.use(router);
app.use(cors);

// 404
app.get("/*", (req, res) => {
  res.status(400).json({
    message: "404! Not found page",
  });
});

// LISTEN APP
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
