import React, { Component } from "react";   // Import React and Component class
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap for styling

class MarriageForm extends Component {
  constructor(props) {
    super(props);
    // Define the initial state (empty form fields + not submitted yet)
    this.state = {
      brideName: "",
      groomName: "",
      date: "",
      venue: "",
      submitted: false,
    };
  }

  // Updates state when user types in input fields
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // Called when form is submitted
  handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    this.setState({ submitted: true }); // Mark form as submitted
  };

  // Reset the form fields and submission status
  handleReset = () => {
    this.setState({
      brideName: "",
      groomName: "",
      date: "",
      venue: "",
      submitted: false,
    });
  };

  render() {
    // Extract values from state for easy use
    const { brideName, groomName, date, venue, submitted } = this.state;

    return (
      <div className="container mt-4" style={{ maxWidth: "600px" }}>
        {/* Outer card for form */}
        <div className="card p-4 shadow">
          <h2 className="text-center mb-4">💍 Marriage Registration Form</h2>

          {/* Form starts here */}
          <form onSubmit={this.handleSubmit}>
            {/* Bride Name Input */}
            <div className="form-group mb-3">
              <label>Bride Name</label>
              <input
                type="text"
                className="form-control"
                name="brideName"
                value={brideName}
                onChange={this.handleChange}
                placeholder="Enter Bride's Name"
                required
              />
            </div>

            {/* Groom Name Input */}
            <div className="form-group mb-3">
              <label>Groom Name</label>
              <input
                type="text"
                className="form-control"
                name="groomName"
                value={groomName}
                onChange={this.handleChange}
                placeholder="Enter Groom's Name"
                required
              />
            </div>

            {/* Marriage Date Input */}
            <div className="form-group mb-3">
              <label>Marriage Date</label>
              <input
                type="date"
                className="form-control"
                name="date"
                value={date}
                onChange={this.handleChange}
                required
              />
            </div>

            {/* Venue Input */}
            <div className="form-group mb-3">
              <label>Venue</label>
              <input
                type="text"
                className="form-control"
                name="venue"
                value={venue}
                onChange={this.handleChange}
                placeholder="Enter Venue"
                required
              />
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-primary w-100 mb-2">
              Submit
            </button>

            {/* Reset Button */}
            <button
              type="button"
              className="btn btn-secondary w-100"
              onClick={this.handleReset}
            >
              Reset
            </button>
          </form>
        </div>

        {/* Show submitted details only if form is submitted */}
        {submitted && (
          <div className="card p-4 mt-4 shadow">
            <h3 className="text-center">📋 Marriage Details</h3>
            <p><b>Bride Name:</b> {brideName}</p>
            <p><b>Groom Name:</b> {groomName}</p>
            <p><b>Date:</b> {date}</p>
            <p><b>Venue:</b> {venue}</p>
          </div>
        )}
      </div>
    );
  }
}

export default MarriageForm; // Export the component for use in other files
