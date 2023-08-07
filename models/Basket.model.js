const mongoose = require("mongoose");

const BasketSchema = mongoose.Schema({
  basket: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Product",
    },
  ],
});

const Basket = mongoose.model("Basket", BasketSchema);

module.exports = Basket;
