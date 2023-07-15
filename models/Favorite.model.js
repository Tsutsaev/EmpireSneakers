const mongoose = require("mongoose");

const FavoriteSchema = mongoose.Schema({
  products: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Product",
    },
  ],
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
});

const Favorite = mongoose.model("Favorite", FavoriteSchema);

module.exports = Favorite;
