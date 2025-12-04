import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  images: [String],
  category: String,
  sizes: [String],
});

export const Product = mongoose.model("Product", productSchema);
