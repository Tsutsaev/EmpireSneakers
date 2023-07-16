const mongoose = require("mongoose");

const GlobalCategorySchema = mongoose.Schema({
  name: String,
  categories: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Categories",
    },
  ],
});

const GlobalCategory = mongoose.model("GlobalCategory", GlobalCategorySchema);
exports.model = GlobalCategory;
