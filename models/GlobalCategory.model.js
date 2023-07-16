const mongoose = require("mongoose");

const GlobalCategoriesSchema = mongoose.Schema({
  name: String,
  categories: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Categories",
    },
  ],
});

const GlobalCategories = mongoose.model("GlobalCategories", GlobalCategoriesSchema);
exports.model = GlobalCategories;
