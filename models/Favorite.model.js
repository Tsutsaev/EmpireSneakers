const mongoose = require("mongoose");

const FavoriteSchema = mongoose.Schema({
  favorite: [
    {
      product: { type: mongoose.SchemaTypes.ObjectId, ref: "Product" },
      size: { type: Number, default: 0 },
    },
  ],
});

const Favorite = mongoose.model("Favorite", FavoriteSchema);

module.exports = Favorite;
