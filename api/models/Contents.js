const mongoose = require("mongoose");

const contentSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      default: "",
    },
    descImgUrl: {
      type: String,
      default: "",
    },
    desc: {
      type: String,
      default: "",
    },

    imgUrl: {
      type: String,
      default: "",
    },

    author: {
      type: String,
      default: "",
    },
    creator: {
      type: String,
      default: "",
    },

    category: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      default: "",
    },
    views: {
      type: Number,
      default: 0,
    },
    one_star: {
      type: Number,
      default: 0,
    },
    two_star: {
      type: Number,
      default: 0,
    },
    three_star: {
      type: Number,
      default: 0,
    },
    four_star: {
      type: Number,
      default: 0,
    },
    five_star: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Content", contentSchema);
