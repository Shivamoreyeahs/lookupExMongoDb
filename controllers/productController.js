const express = require("express");
const app = express();
const Product = require("../models/productSchema");

const createProduct = async (req, res) => {
  try {
    let product = new Product(req.body);
    await product.save();

    res.send(`Product uploaded successfully`);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
};

module.exports = createProduct;
