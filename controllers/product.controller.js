const Product = require("../models/Product.model");

module.exports.productController = {
  getOneProduct: async (req, res) => {
    try {
      const data = await Product.findById(req.params.id).populate(
        "categories globalCategory"
      );
      res.json(data);
    } catch (error) {
      return res.status(404).json(error.toString());
    }
  },
  getProducts: async (req, res) => {
    try {
      const data = await Product.find().populate("categories globalCategory");

      res.json(data);
    } catch (error) {
      return res.status(404).json(error.toString());
    }
  },
  createProduct: async (req, res) => {
    try {
      const {
        name,
        title,
        materials,
        price,
        categories,
        globalCategory,
        sizes,
        articul,
      } = req.body;

      const photo = req.files && req.files[0] ? req.files[0].path : "";

      const product = await Product.create({
        name,
        photo: photo,
        title,
        materials,
        price,
        categories,
        globalCategory,
        sizes:
          sizes.map((item) => ({
            size: item.size,
            quantity: item.quantity,
          })) || "",
        articul,
      });

      const data = await product.populate("categories globalCategory");

      res.json(data);
    } catch (error) {
      return res.status(400).json({ error: error.toString() });
    }
  },
  updateProduct: async (req, res) => {
    const {
      name,
      title,
      materials,
      price,
      categories,
      globalCategory,
      sizes,
      articul,
    } = req.body;
    try {
      const photo = req.files && req.files[0] ? req.files[0].path : "";

      const data = await Product.findByIdAndUpdate(
        req.params.id,
        {
          name,
          photo: photo,
          title,
          materials,
          price,
          categories,
          globalCategory,
          sizes,
          articul,
        },
        { new: true }
      ).populate("categories globalCategory");

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
