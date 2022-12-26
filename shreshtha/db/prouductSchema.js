const mongoose = require("mongoose");

const ProductData = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
  },
  productShortCode: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    require: true,
  },
  quantity: {
    type: Number,
    require: true,
  },
  description: {
    type: String,
    required: false,
    minlength: 3,
    maxlength: 250,
  },
  isBestAchived: {
    type: Boolean,
    required: false,
  },
  createdDate: {
    type: String,
    requied: true,
  },
  origin: {
    type: String,
    required: true,
  },
});

// module.exports = ProductData;
module.exports = mongoose.model("product-list", ProductData);
