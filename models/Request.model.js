const mongoose = require("mongoose");

const RequestSchema = mongoose.Schema({
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
  products: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Product" }],
  totalAmount: Number,
  shippingAdress: {
    adress: String,
    city: String,
    postalCode: String,
    country: String,
  },
  paymentMethod: String,
  createdAt: { type: Date, default: Date.now() },
});

const Request = mongoose.model("Request", RequestSchema);

module.exports = Request;
