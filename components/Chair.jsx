// Import React library (needed for creating components)
import React from "react";

// Define a functional component named Chair
const Chair = () => {
  // Define an object "chair" containing details about the chair
  const chair = {
    name: "Office Chair",   // Name of the chair
    price: "₹2500",         // Price of the chair
    material: "Plastic",    // Material used to make the chair
    brand: "Nilkamal"       // Brand/manufacturer name
  };

  // Return JSX (UI part) to display chair details on the screen
  return (
    <div className="card p-3 mt-3"> {/* A card box with padding and margin */}
      <h5>🪑 Chair</h5> {/* Heading with a chair emoji */}
      
      {/* Display each property of the chair object */}
      <p><strong>Name:</strong> {chair.name}</p>
      <p><strong>Price:</strong> {chair.price}</p>
      <p><strong>Material:</strong> {chair.material}</p>
      <p><strong>Brand:</strong> {chair.brand}</p>
    </div>
  );
};

// Export this component so it can be used in other files
export default Chair;
