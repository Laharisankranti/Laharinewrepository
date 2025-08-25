// src/components/ServiceCard.jsx
import React from "react";

// ServiceCard receives a single `service` object as a prop
// Example of service: { serviceName: "Shirt", price: 20, fabricsAvailable: ["Cotton", "Linen"] }
const ServiceCard = ({ service }) => {
  return (
    // Bootstrap column: card takes up 4 columns on medium+ screens
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm">
        <div className="card-body">
          {/* Service name */}
          <h5 className="card-title">{service.serviceName}</h5>

          {/* Price of tailoring */}
          <p className="card-text">
            <strong>Price:</strong> ${service.price}
          </p>

          {/* List of fabrics */}
          <p className="card-text">
            <strong>Fabrics:</strong>
          </p>
          <ul>
            {/* Loop through fabrics and show each one */}
            {service.fabricsAvailable.map((fabric, index) => (
              <li key={index}>{fabric}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
