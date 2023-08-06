const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  avatar: String,
  login: { type: String, unique: true },
  password: String,
  admin: Boolean,
});
const User = mongoose.model("User", userSchema);
module.exports = User;
