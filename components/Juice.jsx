import React from "react";

/** Renders one juice row inside a table */
const Juice = ({ id, name, price }) => {
  // Common cell style for table data
  const cell = { border: "2px solid #999", padding: "12px 16px", fontSize: 18 };

  // Function to format price in INR with comma separators
  const formatINR = (n) => `₹ ${new Intl.NumberFormat("en-IN").format(n)}`;

  return (
    <tr>
      <td style={cell}>{id}</td>
      <td style={{ ...cell, fontWeight: 500 }}>{name}</td>
      <td style={cell}>{formatINR(price)}</td>
    </tr>
  );
};

export default Juice;
