// Import React (needed to create React components)
import React from "react";

// Define a functional component named "Bed"
const Bed = () => {
  // Create a "bed" object that stores all details of the bed
  const bed = {
    name: "King Size Bed",     // Bed type/name
    price: "₹45000",           // Price of the bed
    material: "Wood",          // Material used to make it
    size: "King",              // Size of the bed
    brand: "Urban Ladder"      // Brand/manufacturer
  };

  // Return JSX (UI layout) to display the bed details
  return (
    <div className="card p-3 mt-3"> {/* Bootstrap card with padding & top margin */}
      <h5>🛏 Bed</h5> {/* Heading with bed emoji for visual appeal */}

      {/* Display each property of the bed object in a neat format */}
      <p><strong>Name:</strong> {bed.name}</p>
      <p><strong>Price:</strong> {bed.price}</p>
      <p><strong>Material:</strong> {bed.material}</p>
      <p><strong>Size:</strong> {bed.size}</p>
      <p><strong>Brand:</strong> {bed.brand}</p>
    </div>
  );
};

// Export the Bed component so it can be used in other files (like App.js)
export default Bed;
