const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const task = mongoose.model("task");

router.get("/getAllTodoCards", async (req, res, next) => {
  try {
    let data = await task.find().sort({date: -1})
    res
      .status(200)
      .json({ success: true, message: "list of todos", data: data });
  } catch (error) {
    next(error);
  }
});

router.post("/addtodoCard", async (req, res, next) => {
  console.log(req.body);
  try {
    let data = await task.create(req.body);
    res
      .status(200)
      .json({ success: true, message: "add todos SuccessFully", data: data });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
