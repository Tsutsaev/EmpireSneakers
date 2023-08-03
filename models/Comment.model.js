const mongoose = require("mongoose");

const CommentSchema = mongoose.Schema({
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
  product: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
  star: {
    type: Number,
    min: 1,
    max: 5,
  },
  title: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: new Date(),
  },
});

const Comment = mongoose.model("Comment", CommentSchema);

module.exports = Comment;
