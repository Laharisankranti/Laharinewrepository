// First, we bring React into our file and also get "Component" so we can create a class-based component
import React, { Component } from "react";

// We are creating a class component called AccessoriesForm
class AccessoriesForm extends Component {
  constructor(props) {
    super(props); // Pass props to the parent class (React.Component)
    
    // This is where we store all the information entered into the form
    this.state = {
      accessoryName: "",     // Name of the accessory
      description: "",       // Short description about the accessory
      category: "Electronics", // Default category (starts with "Electronics")
      brand: "",             // The selected brand (Nike, Adidas, Sony)
      inStock: false,        // Whether the accessory is in stock or not (checkbox)
      warranty: "",          // Warranty period in years
      submittedData: null,   // Data after form is submitted (to display later)
    };
  }

  // This function runs whenever any input field changes
  handleChange = (e) => {
    const { name, value, type, checked } = e.target; // Get the details of the field
    // Update the state. If it’s a checkbox, use true/false. Otherwise, use the value typed.
    this.setState({
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // This function runs when the user submits the form
  handleSubmit = (e) => {
    e.preventDefault(); // Stop page refresh
    // Save all the form data into submittedData so it can be displayed below
    this.setState({
      submittedData: {
        accessoryName: this.state.accessoryName,
        description: this.state.description,
        category: this.state.category,
        brand: this.state.brand,
        inStock: this.state.inStock ? "Yes" : "No", // Show Yes/No instead of true/false
        warranty: this.state.warranty,
      },
    });
  };

  // This function describes what will be shown on the screen
  render() {
    return (
      // Main container with some spacing
      <div className="container mt-4">
        
        {/* A card box for neat design */}
        <div className="card p-4 shadow">
          <h2 className="mb-3">Accessories Form</h2>

          {/* The form starts here */}
          <form onSubmit={this.handleSubmit}>
            
            {/* Text Input for Accessory Name */}
            <div className="mb-3">
              <label className="form-label">Accessory Name</label>
              <input
                type="text"
                className="form-control"
                name="accessoryName"
                value={this.state.accessoryName}
                onChange={this.handleChange}
                required
              />
            </div>

            {/* Textarea for Description */}
            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea
                className="form-control"
                name="description"
                rows="3"
                value={this.state.description}
                onChange={this.handleChange}
              ></textarea>
            </div>

            {/* Dropdown Menu for Category */}
            <div className="mb-3">
              <label className="form-label">Category</label>
              <select
                className="form-select"
                name="category"
                value={this.state.category}
                onChange={this.handleChange}
              >
                <option>Electronics</option>
                <option>Fashion</option>
                <option>Sports</option>
                <option>Home</option>
              </select>
            </div>

            {/* Radio Buttons for Brand Selection */}
            <div className="mb-3">
              <label className="form-label">Brand</label> <br />
              
              {/* Option 1: Nike */}
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  className="form-check-input"
                  name="brand"
                  value="Nike"
                  checked={this.state.brand === "Nike"}
                  onChange={this.handleChange}
                />
                <label className="form-check-label">Nike</label>
              </div>
              
              {/* Option 2: Adidas */}
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  className="form-check-input"
                  name="brand"
                  value="Adidas"
                  checked={this.state.brand === "Adidas"}
                  onChange={this.handleChange}
                />
                <label className="form-check-label">Adidas</label>
              </div>
              
              {/* Option 3: Sony */}
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  className="form-check-input"
                  name="brand"
                  value="Sony"
                  checked={this.state.brand === "Sony"}
                  onChange={this.handleChange}
                />
                <label className="form-check-label">Sony</label>
              </div>
            </div>

            {/* Checkbox for Availability */}
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                name="inStock"
                checked={this.state.inStock}
                onChange={this.handleChange}
              />
              <label className="form-check-label">Available in Stock</label>
            </div>

            {/* Number Input for Warranty */}
            <div className="mb-3">
              <label className="form-label">Warranty (in years)</label>
              <input
                type="number"
                className="form-control"
                name="warranty"
                value={this.state.warranty}
                onChange={this.handleChange}
              />
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>

        {/* After submitting, show the data in a table */}
        {this.state.submittedData && (
          <div className="mt-4">
            <h3>Submitted Details</h3>
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <th>Accessory Name</th>
                  <td>{this.state.submittedData.accessoryName}</td>
                </tr>
                <tr>
                  <th>Description</th>
                  <td>{this.state.submittedData.description}</td>
                </tr>
                <tr>
                  <th>Category</th>
                  <td>{this.state.submittedData.category}</td>
                </tr>
                <tr>
                  <th>Brand</th>
                  <td>{this.state.submittedData.brand}</td>
                </tr>
                <tr>
                  <th>Available in Stock</th>
                  <td>{this.state.submittedData.inStock}</td>
                </tr>
                <tr>
                  <th>Warranty</th>
                  <td>{this.state.submittedData.warranty} years</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  }
}

// Finally, export this component so it can be used in other files
export default AccessoriesForm;
