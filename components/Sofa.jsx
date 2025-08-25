// Import React (necessary to create React components)
import React from "react";

// Define a functional component named Sofa
const Sofa = () => {
  // Create an object "sofa" with all sofa details
  const sofa = {
    name: "Recliner Sofa",   // Sofa name/type
    price: "₹30000",         // Price of the sofa
    material: "Leather",     // Material used
    size: "3 Seater",        // Seating capacity
    brand: "IKEA"            // Brand/manufacturer
  };

  // Return JSX (UI) that displays sofa information
  return (
    <div className="card p-3 mt-3"> {/* A styled Bootstrap card with padding & margin */}
      <h5>🛋 Sofa</h5> {/* Heading with sofa emoji */}
      
      {/* Display each property from the "sofa" object */}
      <p><strong>Name:</strong> {sofa.name}</p>
      <p><strong>Price:</strong> {sofa.price}</p>
      <p><strong>Material:</strong> {sofa.material}</p>
      <p><strong>Size:</strong> {sofa.size}</p>
      <p><strong>Brand:</strong> {sofa.brand}</p>
    </div>
  );
};

// Export Sofa component so it can be used in other files
export default Sofa;
