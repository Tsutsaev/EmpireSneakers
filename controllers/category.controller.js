const { json } = require("express");
const Category = require("../models/Category");

module.exports.categoriesController = {
  createCategory: async (req, res) => {
    try {
      const data = await Category.create({
        name: req.body.name,
        photo: req.body.photo,
      });
      res.json(data);
    } catch (error) {
      res.status(401).json(error.message);
    }
  },
  getOneCategory: async (req, res) => {
    try {
      const data = await Category.findById(req.params.id);
      res.json(data);
    } catch (error) {
      return res.status(404).json(error.toString());
    }
  },
  getCategories: async (req, res) => {
    try {
      const data = await Category.find();
      res, json(data);
    } catch (error) {
      return res.status(404).json(error.toString());
    }
  },
  deleteCategory: async (req, res) => {
    try {
      const data = await Category.findByIdAndDelete(req.params.id);
      res, json(data);
    } catch (error) {
      return res.status(404).json(error.toString());
    }
  },
};
