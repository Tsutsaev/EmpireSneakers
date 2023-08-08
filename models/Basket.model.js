const mongoose = require("mongoose");

const BasketSchema = mongoose.Schema({
  basket: [
    {
      product: { type: mongoose.SchemaTypes.ObjectId, ref: "Product" },
      size: { type: Number, default: 0 },
    },
  ],
  size: String,
});

const Basket = mongoose.model("Basket", BasketSchema);

module.exports = Basket;
