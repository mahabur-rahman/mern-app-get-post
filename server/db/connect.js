const mongoose = require("mongoose");
const DB = process.env.DATABASE;
// connect with db
mongoose
  .connect(DB)
  .then(() => {
    console.log(`Connection successful`);
  })
  .catch((err) => {
    console.log(`No connection : ${err}`);
  });
