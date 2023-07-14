const mongoose = require("mongoose");

const BasketSchema = mongoose.Schema({
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

const Basket = mongoose.model("Basket", BasketSchema);

module.exports = Basket;
