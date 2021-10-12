const mongoose = require("mongoose");

const viewSchema = new mongoose.Schema({
  view: {
    type: Number,
    default: 0,
  },
  name: {
    type: String,
    value: "trang",
  },
});

module.exports = mongoose.model("View", viewSchema);
