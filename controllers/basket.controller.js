const Basket = require("../models/Basket.model");

module.exports.basketController = {
  getBasket: async (req, res) => {
    try {
      const data = await Basket.findById(req.params.id).populate("basket");
      res.json(data);
    } catch (error) {
      return res.status(404).json(error.toString());
    }
  },
  addToBasket: async (req, res) => {
    try {
      const data = await Basket.findByIdAndUpdate(
        req.params.id,
        {
          $addToSet: { basket: req.body.basket },
        },
        { new: true }
      ).populate("basket");

      res.json(data);
    } catch (error) {
      return res.status(404).json(error.toString());
    }
  },
  deleteInBasket: async (req, res) => {
    try {
      const data = await Basket.findByIdAndUpdate(req.params.id, {
        $pull: { basket: req.body.basket },
      }).populate("basket");

      res.json(data);
    } catch (error) {
      return res.status(404).json(error.toString());
    }
  },
};
