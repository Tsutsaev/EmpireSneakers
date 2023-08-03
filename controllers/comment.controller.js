const Comment = require("../models/Comment.model");

module.exports.commentController = {
  createComment: async (req, res) => {
    const { user, product, star, title, date } = req.body;
    try {
      const data = await Comment.create({ user, product, star, title, date });
      res.json(data);
    } catch (error) {
      res.status(401).json(error.message);
    }
  },
  getOneComment: async (req, res) => {
    try {
      const data = await Comment.findById(req.params.id);
      res.json(data);
    } catch (error) {
      return res.status(404).json(error.toString());
    }
  },
  getComments: async (req, res) => {
    try {
      const data = await Comment.find();
      res.json(data);
    } catch (error) {
      return res.status(404).json(error.toString());
    }
  },
  deleteComment: async (req, res) => {
    try {
      const data = await Comment.findByIdAndDelete(req.params.id, {
        new: true,
      });
      res.json(data);
    } catch (error) {
      return res.status(404).json(error.toString());
    }
  },
};
