const Basket = require("../models/Basket.model");

module.exports.basketController = {
  getBasket: async (req, res) => {
    try {
      const data = await Basket.findById(req.params.id).populate(
        "basket.product"
      );
      res.json(data);
    } catch (error) {
      return res.status(404).json(error.toString());
    }
  },
  addToBasket: async (req, res) => {
    try {
      const basketId = req.params.id;
      const { product, size } = req.body;

      const data = await Basket.findByIdAndUpdate(
        basketId,
        {
          $addToSet: { basket: { product, size } },
        },
        { new: true }
      ).populate("basket.product");

      res.json(data);
    } catch (error) {
      return res.status(404).json(error.toString());
    }
  },
  deleteInBasket: async (req, res) => {
    try {
      const basketId = req.params.id;
      const { product, size } = req.body;

      await Basket.findByIdAndUpdate(basketId, {
        $pull: { basket: { product, size } },
      }).populate("basket.product");

      res.json(product);
    } catch (error) {
      return res.status(404).json(error.toString());
    }
  },
};
