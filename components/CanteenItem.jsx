// Importing React library
import React from "react";
// Importing PropTypes to validate the props passed into this component
// (helps ensure correct data types).
import PropTypes from "prop-types";

// Defining a functional component "CanteenItem".
// It receives props: name, price, category, available.
const CanteenItem = ({ name, price, category, available }) => {
  // Check if the item is available.
  // available can be either:
  //   - a boolean (true/false), OR
  //   - a string like "Yes" / "No".
  // We normalize it here into a boolean (true if available, false if not).
  const availOk =
    available === true ||
    (typeof available === "string" && available.toLowerCase() === "yes");

  // JSX → what appears on the screen
  return (
    // Bootstrap card for neat styling
    <div className="card h-100 shadow-sm border-0">
      <div className="card-body">
        
        {/* Item Name */}
        <h5 className="card-title mb-2">{name}</h5>

        {/* Price of the item */}
        <p className="card-text mb-1">
          <strong>Price:</strong> ₹{price}
        </p>

        {/* Category (Breakfast, Lunch, Snack, etc.) */}
        <p className="card-text mb-1">
          <strong>Category:</strong> {category}
        </p>

        {/* Availability badge → green if available, red if not */}
        {/* we are using ternary operator */}
        <span className={`badge ${availOk ? "bg-success" : "bg-danger"}`}>
          {availOk ? "Available" : "Not Available"}
        </span>
      </div>
    </div>
  );
};

// PropTypes validation
// This makes sure the correct type of data is passed from parent component.
CanteenItem.propTypes = {
  name: PropTypes.string.isRequired,      // Must be a string (e.g., "Idli")
  price: PropTypes.number.isRequired,     // Must be a number (e.g., 30)
  category: PropTypes.string.isRequired,  // Must be a string (e.g., "Breakfast")
  available: PropTypes.oneOfType([        // Can be either boolean or string
    PropTypes.bool,
    PropTypes.string
  ]).isRequired,
};

// Exporting the component so it can be used in CanteenMenu.jsx
export default CanteenItem;
