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
  
      // Проверяем, существует ли товар с заданными параметрами в корзине
      const existingItem = await Basket.findOne({
        _id: basketId,
        "basket.product": product,
        "basket.size": size,
      });
  
      if (existingItem) {
        // Если товар уже есть в корзине, не добавляем его повторно
        return res.status(400).json({ error: "Товар уже в корзине" });
      }
  
      const data = await Basket.findByIdAndUpdate(
        basketId,
        {
          $addToSet: { basket: { product, size } },
        },
        { new: true }
      ).populate("basket.product");
  
      res.json(data);
    } catch (error) {
      return res.status(500).json({ error: error.toString() });
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
