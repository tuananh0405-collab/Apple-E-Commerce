import Product from "../models/productModel.js";
import asyncHandler from "../middlewares/asyncHandler.js";

const getAllProducts = asyncHandler(async (req, res) => {
  res.send("getAllProducts");
});
const createProduct = asyncHandler(async (req, res) => {
  res.send("createProduct");
});
const updateProduct = asyncHandler(async (req, res) => {
  res.send("updateProduct");
});
const deleteProduct = asyncHandler(async (req, res) => {
  res.send("deleteProduct");
});
const getProductByID = asyncHandler(async (req, res) => {
  res.send("getProductByID");
});
const getTopProducts = asyncHandler(async (req, res) => {
  res.send("getTopProducts");
});
const addProductReview = asyncHandler(async (req, res) => {
  res.send("addProductReview");
});
const filterProducts = asyncHandler(async (req, res) => {
    console.log('filterProducts');
  res.send("filterProducts");
});

export {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductByID,
  getTopProducts,
  addProductReview,
  filterProducts
};
