const router = require("express").Router();
const View = require("../models/View");
const { json } = require("express");

router.put("/", async (req, res) => {
  try {
    const data = await View.findById("616450db759021e57a7ab932");
    await data.updateOne({ $inc: { view: 1 } });
    res.status(200);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get view

router.get("/get", async (req, res) => {
  try {
    const data = await View.findById("616450db759021e57a7ab932");
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
