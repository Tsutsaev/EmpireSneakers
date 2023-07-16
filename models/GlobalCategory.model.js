const mongoose = require("mongoose");

const GlobalCategoriesSchema = mongoose.Schema({
  name: String,
});

const GlobalCategories = mongoose.model(
  "GlobalCategories",
  GlobalCategoriesSchema
);

module.exports = GlobalCategories;
