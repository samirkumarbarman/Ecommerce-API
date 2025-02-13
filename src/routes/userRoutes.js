import express from "express";
import { getUsers, getUserById, updateUser, deleteUser } from "../controllers/userController.js";
import { protect, isAdmin } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", protect, isAdmin, getUsers); // Get all users (admin only)
router.get("/:id", protect, getUserById); // Get user by ID
router.put("/:id", protect, updateUser); // Update user
router.delete("/:id", protect, isAdmin, deleteUser); // Delete user (admin only)

export default router;
