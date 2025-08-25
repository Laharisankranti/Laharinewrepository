// Import React so we can use JSX (HTML-like syntax inside JavaScript)
import React from "react";

// Define a small component named LoadingComponent
// This component will just show a loading message on the screen
const LoadingComponent = () => {
  return (
    // A Bootstrap alert box with "info" style and centered text
    <div className="alert alert-info text-center">
      {/* The actual loading message that the user will see */}
      Loading product details...
    </div>
  );
};

// Export the component so it can be used in other files
export default LoadingComponent;
