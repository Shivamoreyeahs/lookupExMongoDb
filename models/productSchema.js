const mongoose = require("mongoose");

// define the user schema
const productSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    productType: {
      type: String,
    },
    price: {
      type: String,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

// create the User model
const Product = mongoose.model("Product", productSchema);

module.exports = Product;
