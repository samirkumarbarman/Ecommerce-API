import express from "express";
import { getProducts, createProduct, updateProduct, deleteProduct } from "../controllers/productController.js";
import { isAdmin, protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getProducts); // Get all products
router.post("/", protect, isAdmin, createProduct); // Create product (admin only)
router.put("/:id", protect, isAdmin, updateProduct); // Update product (admin only)
router.delete("/:id", protect, isAdmin, deleteProduct); // Delete product (admin only)

export default router;
