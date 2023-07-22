const mongoose = require("mongoose");

const applicationSchema = mongoose.Schema({
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
  products: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Product" } ],
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

const Application = mongoose.model("Application", applicationSchema);
module.exports = Application;
