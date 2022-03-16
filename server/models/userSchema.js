const mongoose = require("mongoose");

// schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
});

// create a collection | model
const User = mongoose.model("User", userSchema);

// export
module.exports = User;
