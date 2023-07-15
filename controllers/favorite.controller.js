const Favorite = require("../models/Favorite.model");

module.exports.favoriteController = {
  createFavorite: async (req, res) => {
    try {
      const data = await Favorite.create({
        user: req.params.id,
      });
      res.json(data);
    } catch (error) {
      return res.status(404).json(error.toString());
    }
  },
  getFavorite: async (req, res) => {
    try {
      const data = await Favorite.findById(req.params.id).populate("products");
      res.json(data);
    } catch (error) {
      return res.status(404).json(error.toString());
    }
  },
  addToFavorite: async (req, res) => {
    try {
      const data = await Favorite.findByIdAndUpdate(
        req.params.id,
        {
          $addToSet: { Favorite: req.body.Favorite },
        },
        { new: true }
      ).populate("products");

      res.json(data);
    } catch (error) {
      return res.status(404).json(error.toString());
    }
  },
  deleteInFavorite: async (req, res) => {
    try {
      const data = await Favorite.findByIdAndUpdate(req.params.id, {
        $pull: { products: req.body.products },
      }).populate("products");

      res.json(data);
    } catch (error) {
      return res.status(404).json(error.toString());
    }
  },
};
