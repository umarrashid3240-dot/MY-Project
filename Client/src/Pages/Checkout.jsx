import API from "../config/api";

const Checkout = ({ cartItems, total }) => {
  const handleCheckout = async () => {
    try {
      await API.post("/orders", {
        products: cartItems.map(item => ({
          productId: item.id,
          quantity: item.qty,
          size: item.size,
        })),
        totalAmount: total,
      });
      alert("Order placed successfully!");
    } catch (err) {
      alert(err.response.data.msg || "Checkout failed");
    }
  };

  return (
    <div>
      <h2>Total: Rs {total}</h2>
      <button onClick={handleCheckout}>Place Order</button>
    </div>
  );
};

export default Checkout;
