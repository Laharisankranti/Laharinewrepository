// Import React so we can use JSX
import React from "react";

// Define a component called ProductComponent
// It receives "product" as a prop (data about one product)
const ProductComponent = ({ product }) => {
  return (
    // A Bootstrap-styled card with some padding
    <div className="card p-3">
      {/* Title for the product details section */}
      <h4>Electronic Product Details</h4>

      {/* Display product name */}
      <p><strong>Name:</strong> {product.name}</p>

      {/* Display brand */}
      <p><strong>Brand:</strong> {product.brand}</p>

      {/* Display price (with ₹ symbol) */}
      <p><strong>Price:</strong> ₹{product.price}</p>

      {/* Display category (e.g., Laptop, Mobile, etc.) */}
      <p><strong>Category:</strong> {product.category}</p>

      {/* Show if it's a Premium or Budget product (based on price condition) */}
      <p><strong>Brand:</strong> {product.price > 50000 ? "Premium Product" : "Budget Product"}</p>

      {/* Show warranty years or "No Warranty" if 0 */}
      <p><strong>Warranty:</strong> {product.warranty > 0 ? `${product.warranty} years` : "No Warranty"}</p>

      {/* Show availability status in green if in stock, red if out of stock */}
      <p>
        <strong>Status:</strong>{" "}
        {product.availability ? (
          <span style={{ color: "green" }}>✅ In Stock</span>
        ) : (
          <span style={{ color: "red" }}>❌ Out of Stock</span>
        )}
      </p>

      {/* Special offer shown only if category is "Laptop" */}
      {product.category === "Laptop" ? <p>🎒 Free Laptop Bag Offer</p> : null}
    </div>
  );
};

// Export component so it can be used in other files
export default ProductComponent;
