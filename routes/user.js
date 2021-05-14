const express = require("express");
const mongoose = require("mongoose");
const route = express.Router();

const User = require("../db/user");

route.post("/", async (req, res) => {
  const { firstName, lastName } = req.body;
  let user = {};
  user.firstName = firstName;
  user.lastName = lastName;
  const userModel = new User(user);
  await userModel.save();
  res.send(userModel);
});

module.exports = route;
