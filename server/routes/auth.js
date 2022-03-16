const express = require("express");
const router = express.Router();
const User = require("../models/userSchema");

router.get("/getusers", (req, res) => {
  User.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

router.post("/createuser", async (req, res) => {
  const user = req.body;
  const newUser = new User(user);

  await newUser.save();
  res.json(user);
});

// export
module.exports = router;
