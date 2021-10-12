const router = require("express").Router();
const Content = require("../models/Contents");
const { json } = require("express");

//create content
router.post("/post", async (req, res) => {
  try {
    // create new user
    const newContent = await new Content(req.body);
    //save user
    const user = await newContent.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get content

router.get(`/get`, async (req, res) => {
  try {
    const allPost = await Content.find({});
    res.status(200).json(allPost);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get(`/getOther/:id`, async (req, res) => {
  try {
    const allPost = await Content.find({});
    filtered = allPost.filter((e) => e._id != req.params.id);
    filtered.length = 3;
    res.status(200).json(filtered);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get a post

// router.put(`/get/:id`, async (req, res) => {
//   try {
//     const post = await Content.findById(req.params.id);
//     await post.updateOne({ $inc: { views: 1 } });
//     res.status(200);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

//test
router.get("/:id", async (req, res) => {
  try {
    const data = await Content.findById(req.params.id);
    await data.updateOne({ $inc: { views: 1 } });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

// count star

router.put("/one-star/:id", async (req, res) => {
  try {
    const post = await Content.findById(req.params.id);
    await post.updateOne({ $inc: { one_star: 1 } });
    res.status(200);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.put("/two-star/:id", async (req, res) => {
  try {
    const post = await Content.findById(req.params.id);
    await post.updateOne({ $inc: { two_star: 1 } });
    res.status(200);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.put("/three-star/:id", async (req, res) => {
  try {
    const post = await Content.findById(req.params.id);
    await post.updateOne({ $inc: { three_star: 1 } });
    res.status(200);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.put("/four-star/:id", async (req, res) => {
  try {
    const post = await Content.findById(req.params.id);
    await post.updateOne({ $inc: { four_star: 1 } });
    res.status(200);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.put("/five-star/:id", async (req, res) => {
  try {
    const post = await Content.findById(req.params.id);
    await post.updateOne({ $inc: { five_star: 1 } });
    res.status(200);
  } catch (err) {
    res.status(500).json(err);
  }
});

//take book according category
router.get("/category/contest", async (req, res) => {
  try {
    const data = await Content.find({ category: "contest" });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/category/fptBook", async (req, res) => {
  try {
    const data = await Content.find({ category: "fptBook" });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/category/other", async (req, res) => {
  try {
    const data = await Content.find({ category: "other" });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
