const express = require("express");
const mongoose = require("mongoose");
const ProductList = require("./db/prouductSchema");
const cors = require("cors");

let app = express();

app.use(express.json());
app.use(cors());

const connectDb = () => {
  try {
    const conn = mongoose.connect("mongodb://127.0.0.1:27017/Shopping", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connected database");
  } catch (error) {
    products: [productSchema];
    console.error(error);
    console.log("Db connection failed");
  }
};

const PORT = 4001;

app.get("/getProductInfo", async (req, res) => {
  let productList = await ProductList.find();
  console.log(productList);
  res.status(200).json({
    products: productList,
  });
});

app.post("/createProduct", async (req, res) => {
  let productData = req.body;

  try {
    console.log(productData);
    const product = await ProductList.create(productData);
    await product.save();

    res.status(201).json({
      message: "done",
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      message: "didn't save",
    });
  }
});

app.post("/editProduct", async (req, res) => {
  let productData = req.body;
  let { _id, ...data } = productData;
  console.log(data, _id);
  let product = {};
  try {
    product = await ProductList.findByIdAndUpdate(
      _id,
      { ...data },
      { new: true },
      (err, docs) => {
        if (err) {
          console.log("Err ", err);
        } else {
          console.log("Docs");
        }
      }
    );
  } catch (err) {
    console.log("Edit not working");
  }
  res.status(201).json({
    message: "Ok",
    ...product,
  });
});

app.delete("/deleteProduct/:id", async (req, res) => {
  let id = req.params.id;
  console.log(id);
  try {
    await ProductList.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
  }
  res.status(200).json({
    message: "OKaays",
  });
});

app.listen(PORT, () => {
  console.log("server started");
  connectDb();
});
