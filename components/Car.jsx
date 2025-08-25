// Importing React and the Component class from React library.
// "Component" is the base class we extend to create class-based React components.
import React, { Component } from "react";

// Defining a class component called "Car".
// This component will display details of a car.
class Car extends Component {
  
  // Every class component must have a render() method.
  // This method tells React what should appear on the screen (the UI).
  render() {
    // Destructuring props → extracting brand, model, color, year directly from this.props
    // so we don’t have to keep writing "this.props.brand", etc.
    const { brand, model, color, year } = this.props;

    // JSX (what gets displayed in the browser).
    return (
      <div>
        {/* Title */}
        <h2>Car Details:</h2>

        {/* Showing brand passed from props */}
        <p><strong>Brand:</strong> {brand}</p>

        {/* Showing model passed from props */}
        <p><strong>Model:</strong> {model}</p>

        {/* Showing color passed from props */}
        <p><strong>Color:</strong> {color}</p>

        {/* Showing year passed from props */}
        <p><strong>Year:</strong> {year}</p>
      </div>
    );
  }
}

// Exporting the Car component so it can be used in other files (like App.js).
export default Car;
