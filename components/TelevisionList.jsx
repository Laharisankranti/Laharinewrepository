// This line brings React into the file so we can use it to build our component
import React from "react";

// We are creating a small function (component) called TelevisionList
// It expects some data called "televisions" (a list of TV models) to be given to it
const TelevisionList = ({ televisions }) => {
  // The component will show what we describe inside the return section
  return (
    // This is the outer container (like a box) that wraps everything
    // We also give it some space from the top and a clean font style
    <div style={{ marginTop: "20px", fontFamily: "Arial, sans-serif" }}>
      
      // This is the heading text at the top of the section
      <h3>📺 Available Models</h3>

      // Now we check: Did we actually get a list of televisions to show?
      // If yes, and the list has at least one item, then show the list.
      // Otherwise, show a message saying "No models available."
      {televisions && televisions.length > 0 ? (
        
        // This part makes a list on the page
        <ul style={{ lineHeight: "1.8" }}>
          {/* We go through each television model in the list one by one */}
          {televisions.map((model, index) => (
            // Each item will be displayed as a bullet point in the list
            <li key={index}>{model}</li>
          ))}
        </ul>
      ) : (
        // If there are no televisions to show, display this message in gray color
        <p style={{ color: "gray" }}>No television models available.</p>
      )}
    </div>
  );
};

// Finally, we make this component available for other files to use
export default TelevisionList;
