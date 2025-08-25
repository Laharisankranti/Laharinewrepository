// Importing React library
import React from "react";
// Importing another component called CanteenItem
// This will be used to display each menu item individually.
import CanteenItem from "./CanteenItem";

// Defining a functional React component called "CanteenMenu".
const CanteenMenu = () => {
  // Canteen details: name, location, and working hours
  const canteen = {
    name: "Campus Food Court",
    location: "Block A, Ground Floor",
    hours: "8:00 AM - 8:00 PM",
  };

  // Menu items available in the canteen.
  // Each item has: id, name, price, category, and availability.
  const menu = [
    { id: 1, name: "Idli",  price: 30,  category: "Breakfast", available: "Yes" },
    { id: 2, name: "Dosa",  price: 50,  category: "Breakfast", available: "Yes" },
    { id: 3, name: "Vada",  price: 20,  category: "Snack",     available: "No"  },
    { id: 4, name: "Poori", price: 40,  category: "Breakfast", available: "Yes" },
    { id: 5, name: "Meals", price: 120, category: "Lunch",     available: "Yes" },
  ];

  // What should be shown on the screen
  return (
    <div className="container py-4">
      {/* Card layout for neat presentation */}
      <div className="card shadow-lg border-0 mb-4">
        <div className="card-body">
          
          {/* Canteen heading with emoji */}
          <h2 className="card-title display-6">
            🍴 Canteen Name: {canteen.name}
          </h2>

          {/* Showing canteen location and hours */}
          <p className="card-text mb-1"><strong>Location:</strong> {canteen.location}</p>
          <p className="card-text"><strong>Open Hours:</strong> {canteen.hours}</p>

          {/* Divider line */}
          <hr />

          {/* Subheading for menu */}
          <h4 className="mb-3">Canteen Menu</h4>

          {/* Row to arrange items in a grid (responsive layout) */}
          <div className="row g-3">
            {/* Looping through each menu item and passing it to CanteenItem component */}
            {menu.map(item => (
              <div className="col-12 col-md-6 col-lg-4" key={item.id}>
                <CanteenItem
                  name={item.name}
                  price={item.price}
                  category={item.category}
                  available={item.available}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Exporting the component so it can be used in App.js or elsewhere.
export default CanteenMenu;
