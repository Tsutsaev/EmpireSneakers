const Favorite = require("../models/Favorite.model");

module.exports.favoriteController = {
  getFavorite: async (req, res) => {
    try {
      const data = await Favorite.findById(req.params.id).populate("favorite");
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
          $addToSet: { favorite: req.body.favorite },
        },
        { new: true }
      ).populate("favorite");

      res.json(data);
    } catch (error) {
      return res.status(404).json(error.toString());
    }
  },
  deleteInFavorite: async (req, res) => {
    try {
      const data = await Favorite.findByIdAndUpdate(
        req.params.id,
        {
          $pull: { favorite: req.body.favorite },
        },
        { new: true }
      ).populate("favorite");

      res.json(data);
    } catch (error) {
      return res.status(404).json(error.toString());
    }
  },
};
