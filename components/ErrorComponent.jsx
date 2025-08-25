// Import React so we can create a component using JSX
import React from "react";

// Define a small component called ErrorComponent
// This will display an error message on the screen
const ErrorComponent = () => {
  return (
    // A Bootstrap alert box with a "danger" style (red background) and centered text
    <div className="alert alert-danger text-center">
      {/* The actual error message that the user will see */}
      ⚠️ Error fetching product details
    </div>
  );
};

// Export the component so it can be used in other parts of the application
export default ErrorComponent;
