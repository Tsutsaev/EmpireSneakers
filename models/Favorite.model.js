const mongoose = require("mongoose");

const FavoriteSchema = mongoose.Schema({
  favorite: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Product",
    },
  ],
});

const Favorite = mongoose.model("Favorite", FavoriteSchema);

module.exports = Favorite;
