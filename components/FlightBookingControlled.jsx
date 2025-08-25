// Import React and Component class to create a class-based component
import React, { Component } from "react";

// Define a class component for Flight Booking (Controlled Component approach)
class FlightBookingControlled extends Component {
  constructor(props) {
    super(props);
    // Initialize state with empty fields and an array to store submitted bookings
    this.state = {
      passengerName: "",      // Stores passenger's name
      email: "",              // Stores passenger's email
      gender: "",             // Stores passenger's gender (Male/Female)
      mealPreference: "Veg",  // Default meal preference is Veg
      specialRequest: "",     // Stores any extra requests from passenger
      submittedData: [],      // Stores all submitted booking entries
    };
  }

  // 🔹 Function to handle form field changes
  handleChange = (e) => {
    const { name, value } = e.target;  // Extract name & value of the input field
    // Update the state dynamically based on input name
    this.setState({ [name]: value });
  };

  // 🔹 Function to handle form submission
  handleSubmit = (e) => {
    e.preventDefault();  // Prevents page reload on form submit

    // Extract current values from state
    const { passengerName, email, gender, mealPreference, specialRequest } = this.state;

    // Create a new booking entry with current form data
    const newEntry = { passengerName, email, gender, mealPreference, specialRequest };

    // Add new entry into submittedData and reset the form fields
    this.setState((prevState) => ({
      submittedData: [...prevState.submittedData, newEntry], // Keep old data + new one
      passengerName: "",   // Reset passenger name
      email: "",           // Reset email
      gender: "",          // Reset gender
      mealPreference: "Veg", // Reset meal back to default "Veg"
      specialRequest: "",  // Reset special request field
    }));
  };

  // 🔹 Render method decides what should be displayed on screen
  render() {
    // Destructure values from state for easier access
    const { passengerName, email, gender, mealPreference, specialRequest, submittedData } = this.state;

    return (
      <div className="col-md-6">
        {/* Title of the form */}
        <h3>Controlled Flight Booking Form</h3>

        {/* Form begins */}
        <form onSubmit={this.handleSubmit} className="mb-4">
          
          {/* Passenger Name Input */}
          <div className="mb-3">
            <label className="form-label">Passenger Name</label>
            <input
              type="text"
              className="form-control"
              name="passengerName"
              value={passengerName}
              onChange={this.handleChange}
              required
            />
          </div>

          {/* Email Input */}
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={email}
              onChange={this.handleChange}
              required
            />
          </div>

          {/* Gender Radio Buttons */}
          <div className="mb-3">
            <label className="form-label">Gender</label> <br />
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={gender === "Male"}
              onChange={this.handleChange}
            /> Male
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={gender === "Female"}
              onChange={this.handleChange}
              className="ms-3"
            /> Female
          </div>

          {/* Meal Preference Dropdown */}
          <div className="mb-3">
            <label className="form-label">Meal Preference</label>
            <select
              className="form-select"
              name="mealPreference"
              value={mealPreference}
              onChange={this.handleChange}
            >
              <option value="Veg">Veg</option>
              <option value="Non-Veg">Non-Veg</option>
            </select>
          </div>

          {/* Special Request Textarea */}
          <div className="mb-3">
            <label className="form-label">Special Request</label>
            <textarea
              className="form-control"
              name="specialRequest"
              value={specialRequest}
              onChange={this.handleChange}
            ></textarea>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        {/* Form ends */}

        {/* Display submitted bookings in a table, only if there are entries */}
        {submittedData.length > 0 && (
          <table className="table table-bordered">
            <thead className="table-dark">
              <tr>
                <th>Passenger Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Meal</th>
                <th>Request</th>
              </tr>
            </thead>
            <tbody>
              {/* Loop through submittedData and display each booking */}
              {submittedData.map((data, index) => (
                <tr key={index}>
                  <td>{data.passengerName}</td>
                  <td>{data.email}</td>
                  <td>{data.gender}</td>
                  <td>{data.mealPreference}</td>
                  <td>{data.specialRequest}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    );
  }
}

// Export component so it can be used in other files
export default FlightBookingControlled;
