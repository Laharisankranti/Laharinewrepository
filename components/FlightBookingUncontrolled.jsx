// Import React, Component (for class-based components), and createRef (to directly access form fields)
import React, { Component, createRef } from "react";

// Define a class component for an Uncontrolled Flight Booking Form
class FlightBookingUncontrolled extends Component {
  constructor(props) {
    super(props);

    // Create references for each form field (instead of storing them in state)
    this.flightNumberRef = createRef();  // Reference for flight number input
    this.sourceRef = createRef();        // Reference for source input
    this.destinationRef = createRef();   // Reference for destination input
    this.dateRef = createRef();          // Reference for travel date input
    this.termsRef = createRef();         // Reference for terms checkbox

    // State will hold submitted data (not live form values)
    this.state = { submittedData: null };
  }

  // 🔹 Function to handle form submission
  handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload after submitting

    // Collect values directly from input fields via refs
    const data = {
      flightNumber: this.flightNumberRef.current.value,   // Get entered flight number
      source: this.sourceRef.current.value,               // Get entered source
      destination: this.destinationRef.current.value,     // Get entered destination
      date: this.dateRef.current.value,                   // Get entered date
      termsAccepted: this.termsRef.current.checked,       // Check if terms are accepted
    };

    // Save the collected data into state
    this.setState({ submittedData: data });
  };

  // 🔹 Render method controls what is shown on the page
  render() {
    const { submittedData } = this.state; // Extract submittedData from state

    return (
      <div className="col-md-6">
        {/* Title of the form */}
        <h3>Uncontrolled Flight Booking Form</h3>

        {/* Flight booking form starts here */}
        <form onSubmit={this.handleSubmit} className="mb-4">
          
          {/* Flight Number field */}
          <div className="mb-3">
            <label className="form-label">Flight Number</label>
            <input type="text" className="form-control" ref={this.flightNumberRef} required />
          </div>

          {/* Source field */}
          <div className="mb-3">
            <label className="form-label">Source</label>
            <input type="text" className="form-control" ref={this.sourceRef} required />
          </div>

          {/* Destination field */}
          <div className="mb-3">
            <label className="form-label">Destination</label>
            <input type="text" className="form-control" ref={this.destinationRef} required />
          </div>

          {/* Travel Date field */}
          <div className="mb-3">
            <label className="form-label">Travel Date</label>
            <input type="date" className="form-control" ref={this.dateRef} required />
          </div>

          {/* Terms & Conditions checkbox */}
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" ref={this.termsRef} />
            <label className="form-check-label">Terms Accepted</label>
          </div>

          {/* Submit button */}
          <button type="submit" className="btn btn-success">Submit</button>
        </form>
        {/* Form ends */}

        {/* If data has been submitted, show it below inside a card */}
        {submittedData && (
          <div className="card p-3">
            <h5>Flight Details</h5>
            <p><strong>Flight Number:</strong> {submittedData.flightNumber}</p>
            <p><strong>Source:</strong> {submittedData.source}</p>
            <p><strong>Destination:</strong> {submittedData.destination}</p>
            <p><strong>Date:</strong> {submittedData.date}</p>
            <p><strong>Terms Accepted:</strong> {submittedData.termsAccepted ? "Yes" : "No"}</p>
          </div>
        )}
      </div>
    );
  }
}

// Export component so it can be used in other parts of the app
export default FlightBookingUncontrolled;
