const Product = require("../models/Product.model");

module.exports.productController = {
  getOneProduct: async (req, res) => {
    try {
      const data = await Product.findById(req.params.id).populate(
        "comments categories"
      );
      res.json(data);
    } catch (error) {
      return res.status(404).json(error.toString());
    }
  },
  getProducts: async (req, res) => {
    try {
      const data = await Product.find().populate("comments categories");

      res.json(data);
    } catch (error) {
      return res.status(404).json(error.toString());
    }
  },
  createProduct: async (req, res) => {
    try {
      const { name, photo, title, materials, price, categories, sizes, articul } =
        req.body;

      const product = await Product.create({
        name,
        photo,
        title,
        materials,
        price,
        categories,
        sizes,
        articul
      });

      const data = await product.populate("categories");

      res.json(data);
    } catch (error) {
      return res.status(404).json(error.toString());
    }
  },
  updateProduct: async (req, res) => {
    const { name, photo, title, materials, price, categories, sizes } =
      req.body;
    try {
      const data = await Product.findByIdAndUpdate(
        req.params.id,
        {
          name,
          photo,
          title,
          materials,
          price,
          categories,
          sizes,
        },
        { new: true }
      ).populate("categories comments");

      res.json(data);
    } catch (error) {
      return res.status(404).json(error.toString());
    }
  },
  deleteProduct: async (req, res) => {
    try {
      const data = await Product.findByIdAndDelete(req.params.id);
      res.json(data);
    } catch (error) {
      return res.status(404).json(error.toString());
    }
  },
};
