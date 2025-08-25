// src/components/TailorShop.jsx
import React from "react";
import ServiceCard from "./ServiceCard"; // Importing child component to display each service

// Main component that represents the Tailor Shop
const TailorShop = () => {
  // List of tailoring services with details
  const services = [
    {
      serviceName: "Shirt",
      price: 20,
      fabricsAvailable: ["Cotton", "Linen", "Polyester"], // fabrics that can be used
    },
    {
      serviceName: "Pants",
      price: 30,
      fabricsAvailable: ["Denim", "Wool", "Chino"],
    },
    {
      serviceName: "Lehenga",
      price: 150,
      fabricsAvailable: ["Silk", "Georgette", "Chiffon"],
    },
    {
      serviceName: "Blouse",
      price: 40,
      fabricsAvailable: ["Cotton", "Silk", "Satin"],
    },
  ];

  return (
    <div className="container mt-5">
      {/* Page Title */}
      <h2 className="text-center mb-4">🧵 Tailoring Services</h2>

      {/* Display services in a grid (Bootstrap row & columns) */}
      <div className="row">
        {/* Loop through each service and send it to ServiceCard */}
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </div>
  );
};

export default TailorShop;
