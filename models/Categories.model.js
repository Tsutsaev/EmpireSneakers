const mongoose = require("mongoose");
const categoriesSchema = mongoose.Schema({
  name: String,
  photo: String,
  globalCategories: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "GlobalCategories"
  }
});

const Categories = mongoose.model("Categories", categoriesSchema);

module.exports = Categories;
