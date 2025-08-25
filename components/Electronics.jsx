// Importing React and useState hook.
// useState lets us store values that can change (like brand and price).
import React, { useState } from "react";

// Importing Bootstrap CSS library for easy styling and layout.
import "bootstrap/dist/css/bootstrap.min.css";

// Defining a functional React component called "Electronics".
const Electronics = () => {
  
  // State variables:
  // name → The item’s name (default: "Laptop")
  // brand → The company/brand (default: "Dell")
  // price → The cost of the item (default: 5500)
  const [name, setName] = useState("Laptop");
  const [brand, setBrand] = useState("Dell");
  const [price, setPrice] = useState(5500);

  // Function to change the brand to "HP".
  const handleChangeBrand = () => {
    setBrand("HP");
  };

  // Function to increase the price by ₹500 every time it’s clicked.
  const handleIncreasePrice = () => {
    setPrice(price + 500); 
  };

  // What the component displays on the screen (UI).
  return (
    // Bootstrap container with margin-top
    <div className="container mt-5">
      {/* Card layout with shadow and padding */}
      <div className="card shadow-lg p-4">
        
        {/* Title of the card */}
        <h3 className="card-title text-center mb-4">
          ⚡ Electronic Item Details
        </h3>

        {/* Card body showing details in the center */}
        <div className="card-body text-center">
          
          {/* Showing item name */}
          <p>
            <strong>Name:</strong> {name}
          </p>

          {/* Showing brand (changes when button is clicked) */}
          <p>
            <strong>Brand:</strong> {brand}
          </p>

          {/* Showing price (increases when button is clicked) */}
          <p>
            <strong>Price:</strong> ₹{price}
          </p>

          {/* Action buttons */}
          <div className="d-flex justify-content-center gap-3 mt-3">
            {/* Button to change brand from Dell → HP */}
            <button
              className="btn btn-secondary"
              onClick={handleChangeBrand}
            >
              Change Brand
            </button>

            {/* Button to increase price by ₹500 */}
            <button
              className="btn btn-primary"
              onClick={handleIncreasePrice}
            >
              Increase Price
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Exporting the Electronics component so it can be used in App.js or elsewhere.
export default Electronics;
