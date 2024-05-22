import express from "express";
import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js";
import {
  getAllCategories,
  getCategoryByID,
  createCategory,
  deleteCategoryByID,
  updateCategoryByID,
} from "../controllers/categoryController.js";
const router = express.Router();

// PUBLIC ROUTES:
// Get all categories
router.route("/all").get(getAllCategories);
// Get category by id
router.route("/:id").get(getCategoryByID);

// ADMIN ROUTES:
// Create category
router.route("/create").put(authenticate, authorizeAdmin, createCategory);
// Update & Delete category
router
  .route("/:categoryID")
  .delete(authenticate, authorizeAdmin, deleteCategoryByID)
  .put(authenticate, authorizeAdmin, updateCategoryByID);

export default router;
