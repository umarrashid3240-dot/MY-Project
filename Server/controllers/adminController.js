import { Product } from "../models/Product.js";

// Add Product
export const addProduct = async (req, res) => {
  if (!req.user.isAdmin) return res.status(403).json({ msg: "Not authorized" });
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update Product
export const updateProduct = async (req, res) => {
  if (!req.user.isAdmin) return res.status(403).json({ msg: "Not authorized" });
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete Product
export const deleteProduct = async (req, res) => {
  if (!req.user.isAdmin) return res.status(403).json({ msg: "Not authorized" });
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ msg: "Product deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
