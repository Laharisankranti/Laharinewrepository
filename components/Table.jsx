// Import React (needed to create React components)
import React from "react";

// Define a functional component named Table
const Table = () => {
  // Create an object "table" with details of a dining table
  const table = {
    name: "Dining Table",   // The type of furniture
    price: "₹12000",        // Price of the table
    material: "Wood",       // What the table is made of
    size: "6 Seater",       // Table size/capacity
    brand: "Godrej"         // Manufacturer/brand name
  };

  // Return JSX (UI part) that displays the table details
  return (
    <div className="card p-3 mt-3"> {/* A styled card with padding and margin */}
      <h5>🪑 Table</h5> {/* Heading with a table emoji */}
      
      {/* Display each property of the "table" object */}
      <p><strong>Name:</strong> {table.name}</p>
      <p><strong>Price:</strong> {table.price}</p>
      <p><strong>Material:</strong> {table.material}</p>
      <p><strong>Size:</strong> {table.size}</p>
      <p><strong>Brand:</strong> {table.brand}</p>
    </div>
  );
};

// Export the Table component so it can be used in other files
export default Table;
