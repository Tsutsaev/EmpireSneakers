const Categories = require("../models/Categories.model");

module.exports.categoriesController = {
  createCategories: async (req, res) => {
    try {
      const data = await Categories.create({
        name: req.body.name,
        photo: req.body.photo,
        globalCategories: req.body.globalCategories,
      });
      const result = await data.populate("globalCategories");
      res.json(result);
    } catch (error) {
      res.status(401).json(error.message);
    }
  },
  getOneCategories: async (req, res) => {
    try {
      const data = await Categories.findById(req.params.id).populate(
        "globalCategories"
      );
      res.json(data);
    } catch (error) {
      return res.status(404).json(error.toString());
    }
  },
  getCategories: async (req, res) => {
    try {
      const data = await Categories.find().populate("globalCategories");
      res.json(data);
    } catch (error) {
      return res.status(404).json(error.toString());
    }
  },
  deleteCategories: async (req, res) => {
    try {
      const data = await Categories.findByIdAndDelete(req.params.id, {
        new: true,
      });
      res.json(data);
    } catch (error) {
      return res.status(404).json(error.toString());
    }
  },
};
