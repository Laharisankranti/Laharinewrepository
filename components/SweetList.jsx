// Importing the React library so that we can create and use React components.
import React from "react";

// Defining a React functional component named "SweetsList".
const SweetsList = () => {
  
  // Creating an array (a kind of list) called "sweets".
  // Each sweet has three properties: 
  // 1. id (a unique number to identify each sweet),
  // 2. name (the sweet’s name),
  // 3. price (how much the sweet costs).
  const sweets = [
    { id: 1, name: "Laddu", price: 50 },
    { id: 2, name: "Jalebi", price: 40 },
    { id: 3, name: "Rasgulla", price: 60 },
    { id: 4, name: "Gulab Jamun", price: 70 },
  ];

  // What this component should display on the screen (the UI).
  return (
    // Wrapping everything inside a <div>, which is a container for other elements.
    <div>
      {/* A heading for the list of sweets */}
      <h2>Sweets List:</h2>

      {/* <ul> means an unordered list, used to show items one below the other */}
      <ul>
        {/* Looping through the "sweets" array. 
            For every sweet inside the list, we create one <li> (list item).
            The "key" helps React to identify each list item uniquely. */}
        {sweets.map((sweet) => (
          <li key={sweet.id}>
            {/* Displaying the sweet’s name and its price with the Rupee symbol (₹). */}
            {sweet.name} - Price: ₹{sweet.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Making this component available for other files to use by exporting it.
export default SweetsList;
