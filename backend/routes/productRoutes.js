import express from "express";
import checkId from "../middlewares/checkId.js";
import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js";

import {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductByID,
  getTopProducts,
  addProductReview,
  filterProducts
} from "../controllers/productController.js";
const router = express.Router();

// PUBLIC ROUTES:
// Get all products
router.route("/").get(getAllProducts);
// Get top products
router.route("/top").get(getTopProducts);
// Review products
router.route("/:id/reviews").put(authenticate, checkId, addProductReview);
// Filter products
router.route('/filtered').post(filterProducts)

// ADMIN ROUTES:
// Create product
router.route("/create").put(authenticate, authorizeAdmin, createProduct);
// Update & Delete product & Get product by id
router
  .route("/:id")
  .get(getProductByID)
  .put(authenticate, authorizeAdmin, updateProduct)
  .delete(authenticate, authorizeAdmin, deleteProduct);

export default router;
