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
  articul: {
    type: String,
    required: true,
    default: () => nanoid(7),
    index: { unique: true },
  },
  price: { type: Number, required: true, default: 0 },
  raiting: { type: Number, default: 0 },
  categories: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Categories",
    },
  ],
  comments: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Comments",
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
