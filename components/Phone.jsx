
// useState lets us create and manage "state" (data that can change over time).
import React, { useState } from "react";

// Defining a React functional component called "Phone".
const Phone = () => {
  
  // Creating a state variable called "phone" using useState.
  // It stores details about the phone: brand, model, and price.
  // "setPhone" is the function we use to update/change these details.
  const [phone, setPhone] = useState({
    brand: "Apple",
    model: "iPhone 15",
    price: 79999
  });

  // A function that increases the phone price by ₹1000 whenever it's called.
  // It uses the previous phone details (...prevPhone) and only updates the "price".
  const increasePrice = () => {
    setPhone((prevPhone) => ({
      ...prevPhone, // keep all previous phone details the same
      price: prevPhone.price + 1000 // increase only the price
    }));
  };

  // What this component shows on the screen (the UI).
  return (
    // A <div> container with some inline styling: center alignment and top margin.
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      {/* A heading for the phone details */}
      <h2>📱 Phone Details</h2>

      {/* Showing phone details one by one from the state */}
      <p><strong>Brand:</strong> {phone.brand}</p>
      <p><strong>Model:</strong> {phone.model}</p>
      <p><strong>Price:</strong> ₹{phone.price}</p>

      {/* A button to increase the price. 
          When clicked, it calls the increasePrice function above. */}
      <button 
        onClick={increasePrice} 
        style={{
          backgroundColor: "#007BFF", // blue button
          color: "white", // white text
          border: "none", // no border
          borderRadius: "5px", // rounded corners
          padding: "10px 20px", // space inside the button
          cursor: "pointer" // pointer cursor on hover
        }}
      >
        Increase Price
      </button>
    </div>
  );
};

// Exporting the Phone component so that it can be used in other files (like App.js).
export default Phone;
