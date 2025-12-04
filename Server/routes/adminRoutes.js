import express from "express";
import { addProduct, updateProduct, deleteProduct } from "../controllers/adminController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/product", verifyToken, addProduct);
router.put("/product/:id", verifyToken, updateProduct);
router.delete("/product/:id", verifyToken, deleteProduct);

export default router;
