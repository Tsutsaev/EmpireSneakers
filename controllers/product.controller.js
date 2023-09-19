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
        rating,
        sizes,
        articul,
      } = req.body;

      
      //const photo = req.files && req.files[0] ? req.files[0].path : "";
      
      const photo = [];
      
      if (req.files && req.files.length > 0) {
        for (let i = 0; i < req.files.length; i++) {
          const photoPath = req.files[i].path;
          photo.push(photoPath);
        }
      }
      //console.log(JSON.parse(categories));
      
      
      const product = await Product.create({
        name,
        photo,
        title,
        materials,
        price,
        categories: JSON.parse(categories),
        globalCategory,
        sizes,
        rating,
        articul,
      });
      
      
      const data = await product
        .populate("categories globalCategory")

      res.json(data);
    } catch (error) {
      return res.status(404).json(error.toString());
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
