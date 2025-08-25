// Bring React into our file and also bring useState hook (used to handle form and list data)
import React, { useState } from "react";

// We create a functional component called BakingItemsForm
const BakingItemsForm = () => {
  // State to store form data (what the user types in)
  const [formData, setFormData] = useState({
    itemName: "",        // Name of the baking item (e.g., Chocolate Cake)
    quantity: "",        // Quantity to bake
    ingredients: "",     // Ingredients list
    bakingTime: "",      // Baking time in minutes
    category: "Cake",    // Default category is "Cake"
  });

  // State to keep a list of all baking items that were added
  const [bakingItems, setBakingItems] = useState([]);

  // 🔹 Function to handle input changes (runs whenever user types/changes form data)
  const handleChange = (e) => {
    const { name, value } = e.target; // Extract field name and value
    // Update formData state by copying old data and replacing the changed field
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // 🔹 Function to handle form submission (runs when user clicks "Add Baking Item")
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page from refreshing
    // Add the current formData into the bakingItems list
    setBakingItems([...bakingItems, formData]);
    // Reset form fields back to empty/default after submission
    setFormData({
      itemName: "",
      quantity: "",
      ingredients: "",
      bakingTime: "",
      category: "Cake",
    });
  };

  // What appears on the screen
  return (
    <div className="container mt-4">
      {/* Card box for styling */}
      <div className="card p-4 shadow">
        <h2 className="mb-3">🧁 Baking Items Form</h2>

        {/* Form starts here */}
        <form onSubmit={handleSubmit}>
          
          {/* Input for Item Name */}
          <div className="mb-3">
            <label className="form-label">Item Name</label>
            <input
              type="text"
              className="form-control"
              name="itemName"
              value={formData.itemName}
              onChange={handleChange}
              required
            />
          </div>

          {/* Input for Quantity */}
          <div className="mb-3">
            <label className="form-label">Quantity</label>
            <input
              type="number"
              className="form-control"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              required
            />
          </div>

          {/* Textarea for Ingredients */}
          <div className="mb-3">
            <label className="form-label">Ingredients</label>
            <textarea
              className="form-control"
              name="ingredients"
              rows="2"
              value={formData.ingredients}
              onChange={handleChange}
            ></textarea>
          </div>

          {/* Input for Baking Time */}
          <div className="mb-3">
            <label className="form-label">Baking Time (minutes)</label>
            <input
              type="number"
              className="form-control"
              name="bakingTime"
              value={formData.bakingTime}
              onChange={handleChange}
            />
          </div>

          {/* Dropdown for Category (Cake, Bread, Pastry) */}
          <div className="mb-3">
            <label className="form-label">Category</label>
            <select
              className="form-select"
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="Cake">Cake</option>
              <option value="Bread">Bread</option>
              <option value="Pastry">Pastry</option>
            </select>
          </div>

          {/* Submit button */}
          <button type="submit" className="btn btn-success">
            Add Baking Item
          </button>
        </form>
      </div>

      {/* Display the table only if we have at least one baking item added */}
      {bakingItems.length > 0 && (
        <div className="mt-4">
          <h3>Baking Items List</h3>
          <table className="table table-bordered table-striped">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Item Name</th>
                <th>Quantity</th>
                <th>Ingredients</th>
                <th>Baking Time</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              {/* Loop through bakingItems and display each one in a row */}
              {bakingItems.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td> {/* Show row number */}
                  <td>{item.itemName}</td>
                  <td>{item.quantity}</td>
                  <td>{item.ingredients}</td>
                  <td>{item.bakingTime} mins</td>
                  <td>{item.category}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

// Export this component so it can be used in other parts of the app
export default BakingItemsForm;
