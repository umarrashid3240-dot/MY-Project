import { useState } from "react";
import API from "../config/api";

const AdminDashboard = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState("");

  const handleAddProduct = async () => {
    try {
      const res = await API.post("/admin/product", {
        title,
        price,
        description,
        images: images.split(","),
      });
      alert("Product added!");
    } catch (err) {
      alert(err.response.data.msg || "Error adding product");
    }
  };

  return (
    <div>
      <input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
      <input placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <input placeholder="Images (comma separated URLs)" value={images} onChange={(e) => setImages(e.target.value)} />
      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  );
};

export default AdminDashboard;
