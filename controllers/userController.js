const express = require("express");
const app = express();

const User = require("../models/userSchema");

const signUp = async (req, res) => {
  try {
    let user = new User(req.body);
    await user.save();

    res.send(`User successfully registered`);
    // res.send(user);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
};

const signIn = async (req, res) => {
  try {
    let shiv = "";
    const user = await User.find({
      email: req.body.email,
    });
    console.log(user);
    if (user) {
      shiv = await User.aggregate([
        {
          $lookup: {
            from: "products",
            localField: "_id",
            foreignField: "userId",
            as: "userData",
          },
        },
      ]);
    }
    console.log(shiv);
    res.send(shiv);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
};

module.exports = { signUp, signIn };
