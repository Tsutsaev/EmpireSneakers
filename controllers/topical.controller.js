const Topical = require("../models/Topical.model");

module.exports.topicalController = {
  getTopical: async (req, res) => {
    try {
      const data = await Topical.find();

      res.json(data);
    } catch (error) {
      return res.status(404).json(error.toString());
    }
  },
  addTopical: async (req, res) => {
    try {
      const data = await Topical.create(
        {
          img: req.files.map((item) => item.path),
          url: req.body.url,
        },
        { new: true }
      );
      res.json(data);
    } catch (error) {
      return res.status(404).json(error.toString());
    }
  },
  updateTopical: async (req, res) => {
    try {
      const data = await Topical.findByIdAndUpdate(
        req.params.id,
        {
          img: req.files.map((item) => item.path),
          url: req.body.url,
        },
        { new: true }
      ).populate("url");
      res.json(data);
    } catch (error) {
      return res.status(404).json(error.toString());
    }
  },
  deleteTopical: async (req, res) => {
    try {
      const data = await Topical.findByIdAndDelete(req.params.id);
      res.json(data);
    } catch (error) {
      return res.status(404).json(error.toString());
    }
  },
};
