import express from "express";
import { addToCart, getCart } from "../controllers/cartController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, addToCart); // Add item to cart
router.get("/", protect, getCart); // Get user's cart


export default router;
