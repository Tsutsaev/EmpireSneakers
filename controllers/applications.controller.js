const Application = require("../models/Application.model");

module.exports.applicationsController = {
  getApplications: async (req, res) => {
    try {
      const applications = await Application.find().populate("products user");
      res.json(applications);
    } catch (error) {
      return res.status(404).json(error.toString());
    }
  },
  createApplication: async (req, res) => {
    const {
      user,
      products,
      totalAmount,
      shippingAdress,
      paymentMethod,
      createdAt,
    } = req.body;

    try {
      const application = await Application.create({
        user,
        products,
        totalAmount,
        shippingAdress,
        paymentMethod,
        createdAt,
      });

      const data = await application.populate("products user");
      res.json(data);
    } catch (error) {
      return res.status(404).json(error.toString());
    }
  },
  updateApplications: async (req, res) => {
    const {
      user,
      products,
      totalAmount,
      shippingAdress,
      paymentMethod,
      createdAt,
    } = req.body;

    try {
      const data = await Application.findByIdAndUpdate(
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
  deleteApplication: async (req, res) => {
    try {
      const data = await Application.findByIdAndDelete(req.params.id);
      res.json(data);
    } catch (error) {
      return res.status(404).json(error.toString());
    }
  },
};
