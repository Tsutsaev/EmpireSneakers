const mongoose = require("mongoose");

const BasketSchema = mongoose.Schema({
  basket: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Product",
    },
  ],
  size: String,
});

const Basket = mongoose.model("Basket", BasketSchema);

module.exports = Basket;
