import { Order } from "../models/Order.js";

// Create Order
export const createOrder = async (req, res) => {
  try {
    const { products, totalAmount } = req.body;
    const order = await Order.create({ userId: req.user.id, products, totalAmount });
    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get Orders for user
export const getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.user.id });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
