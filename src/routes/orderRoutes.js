import express from "express";
import { createOrder, getUserOrder } from "../controllers/orderController.js";
import { protect, adminOnly } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createOrder); // Create order
router.get("/", protect, getUserOrder); // Get all orders (user)
router.get("/:id", protect, getUserOrder); // Get order by ID
router.put("/:id/status", protect, isAdmin, adminOnly);

export default router;