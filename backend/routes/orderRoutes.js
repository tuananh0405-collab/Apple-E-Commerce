import express from "express";
import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js";
import {
  createOrder,
  getAllOrders,
  getUserOrders,
  countTotalOrders,
  calculateTotalSales,
  calculateTotalSalesByDate,
  getOrderByID,
  markOrderAsPaid,
  markOrderAsDelivered,
} from "../controllers/orderController.js";
const router = express.Router();

// USER ROUTES:
// Create order & Get all orders(admin only)
router
  .route("/")
  .post(authenticate, createOrder)
  .get(authenticate, authorizeAdmin, getAllOrders);
// Get user orders
router.route("/my-orders").get(authenticate, getUserOrders);
// Count total orders
router.route("/total-orders").get(authenticate, countTotalOrders);
// Calculate total sales
router.route("/total-sales").get(authenticate, calculateTotalSales);
// Calculate total sales by date
router
  .route("/total-sales-by-date")
  .get(authenticate, calculateTotalSalesByDate);
// Get order by id
router.route("/:id").get(authenticate, getOrderByID);
// Mark order as paid
router.route("/:id/paid").put(authenticate, markOrderAsPaid);
// ADMIN ROUTES:

// Mark order as deliverd
router
  .route("/:id/delivered")
  .put(authenticate, authorizeAdmin, markOrderAsDelivered);

export default router;
