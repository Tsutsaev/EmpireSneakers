const mongoose = require("mongoose");
const categoriesSchema = mongoose.Schema({
  name: String,
  photo: String,
});

const Categories = mongoose.model("Categories", categoriesSchema);

module.exports = Categories;
