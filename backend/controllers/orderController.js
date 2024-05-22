import Order from "../models/orderModel.js";
import Product from "../models/productModel.js";

const createOrder = async (req, res) => {
  res.send("createOrder");
};
const getAllOrders = async (req, res) => {
  res.send("getAllOrders");
};
const getUserOrders = async (req, res) => {
  res.send("getUserOrders");
};
const countTotalOrders = async (req, res) => {
  res.send("countTotalOrders");
};
const calculateTotalSales = async (req, res) => {
  res.send("calculateTotalSales");
};
const calculateTotalSalesByDate = async (req, res) => {
  res.send("calculateTotalSalesByDate");
};
const getOrderByID = async (req, res) => {
  res.send("getOrderByID");
};
const markOrderAsPaid = async (req, res) => {
  res.send("markOrderAsPaid");
};
const markOrderAsDelivered = async (req, res) => {
  res.send("markOrderAsDelivered");
};

export {
  createOrder,
  getAllOrders,
  getUserOrders,
  countTotalOrders,
  calculateTotalSales,
  calculateTotalSalesByDate,
  getOrderByID,
  markOrderAsPaid,
  markOrderAsDelivered
};
