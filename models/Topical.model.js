const mongoose = require("mongoose");

const topicalSchema = mongoose.Schema({
  img: [String],
  url: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Product",
    },
  ],
});
const Topical = mongoose.model("Topical", topicalSchema);
module.exports = Topical;
