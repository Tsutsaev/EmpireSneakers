const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  name: { type: String, required: false },
  photo: [
    {
      type: String,
    },
  ],
  title: { type: String, required: true },
  materials: String,
  articul: { type: Number },
  price: { type: Number, required: true, default: 0 },
  rating: { type: Number, default: 0, min: 0, max: 5 },
  categories: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Categories",
    },
  ],
  globalCategory: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "GlobalCategories",
  },
  sizes: [
    { type: mongoose.SchemaTypes.Mixed,
      size: Number,
      quantity: Number,
    },
  ],
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
