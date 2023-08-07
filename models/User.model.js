const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  avatar: String,
  login: { type: String, unique: true },
  password: String,
  admin: Boolean,
  favorite: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Favorite",
  },
  basket: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Basket",
  },
});
const User = mongoose.model("User", userSchema);
module.exports = User;
