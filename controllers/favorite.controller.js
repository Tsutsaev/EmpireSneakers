const Favorite = require("../models/Favorite.model");

module.exports.favoriteController = {
  getFavorite: async (req, res) => {
    try {
      const data = await Favorite.findById(req.params.id).populate(
        "favorite.product"
      );

      res.json(data);
    } catch (error) {
      return res.status(404).json(error.toString());
    }
  },
  addToFavorite: async (req, res) => {
    try {
      const favoriteId = req.params.id;
      const { product, size } = req.body;

      const data = await Favorite.findByIdAndUpdate(
        favoriteId,
        {
          $addToSet: { favorite: { product, size } },
        },
        { new: true }
      ).populate("favorite.product");

      res.json(data);
    } catch (error) {
      return res.status(400).json({ error: error.toString() });
    }
  },
  deleteInFavorite: async (req, res) => {
    const favoriteId = req.params.id;
    const { product, size } = req.body;

    try {
      const data = await Favorite.findByIdAndUpdate(
        favoriteId,
        {
          $pull: { favorite: { product, size } },
        },
        { new: true }
      ).populate("favorite.product");

      res.json(product);
    } catch (error) {
      return res.status(404).json(error.toString());
    }
  },
};
