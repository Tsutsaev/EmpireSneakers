const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  name: String,
  email: String,
  login: { type: String, unique: true },
  password: String,
  admin: Boolean,
});
const User = mongoose.model("User", userSchema);
module.exports = User;
