const Request = require("../models/Request.model");

module.exports.requestsController = {
  getRequests: async (req, res) => {
    try {
      const requests = await Request.find().populate("products user");
      res.json(requests);
    } catch (error) {
      return res.status(404).json(error.toString());
    }
  },
  createRequest: async (req, res) => {
    try {
      const {
        user,
        products,
        totalAmount,
        adress,
        city,
        postalCode,
        country,
        paymentMethod,
        createdAt,
      } = req.body;

      const request = await Request.create({
        user,
        products,
        totalAmount,
        shippingAdress: {
          adress,
          city,
          postalCode,
          country,
        },
        paymentMethod,
        createdAt,
      });

      const data = await request.populate("products user");
      res.json(data);
    } catch (error) {
      return res.status(404).json(error.toString());
    }
  },
  updateRequests: async (req, res) => {
    const {
      user,
      products,
      totalAmount,
      shippingAdress,
      paymentMethod,
      createdAt,
    } = req.body;

    try {
      const data = await Request.findByIdAndUpdate(
        req.params.id,
        {
          user,
          products,
          totalAmount,
          shippingAdress,
          paymentMethod,
          createdAt,
        },
        { new: true }
      );
      res.json(data);
    } catch (error) {
      return res.status(404).json(error.toString());
    }
  },
  deleteRequest: async (req, res) => {
    try {
      const data = await Request.findByIdAndDelete(req.params.id);
      res.json(data);
    } catch (error) {
      return res.status(404).json(error.toString());
    }
  },
};
