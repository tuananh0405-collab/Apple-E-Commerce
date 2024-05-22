import express from "express";
import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js";
import {
  createUser,
  getAllUsers,
  loginUser,
  logoutUser,
  getProfileUser,
  updateProfileUser,
  getUserByID,
  updateUserByID,
  deleteUserByID,
} from "../controllers/userController.js";
const router = express.Router();

//PUBLIC ROUTES:
// Sign up

// Log in
router.post("/login", loginUser);
// Log out
router.get("/logout", logoutUser);
// Get & Update Profile
router
  .route("/profile")
  .get(authenticate, getProfileUser)
  .put(authenticate, updateProfileUser);

//ADMIN ROUTES:
// Create user(= sign up) & Get all users
router
  .route("/")
  .post(createUser)
  .get(authenticate, authorizeAdmin, getAllUsers);
// Get Update Delete user by id
router
  .route("/:id")
  .get(authenticate, authorizeAdmin, getUserByID)
  .put(authenticate, authorizeAdmin, updateUserByID)
  .delete(authenticate, authorizeAdmin, deleteUserByID);

export default router;
