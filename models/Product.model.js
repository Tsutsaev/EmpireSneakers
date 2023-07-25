const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  name: { type: String, required: true },
  photo: [
    {
      type: String,
    },
  ],
  title: { type: String, required: true },
  materials: String,
  articul: { type: Number },
  price: { type: Number, required: true, default: 0 },
  raiting: { type: Number, default: 0 },
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
  comments: [
    {
      type: String,
    },
  ],
  sizes: [
    {
      size: Number,
      quantity: Number,
    },
  ],
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
