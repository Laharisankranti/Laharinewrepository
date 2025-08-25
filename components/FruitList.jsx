import React from "react";

const FruitList = ({ fruits }) => {
  return (
    <div style={{ marginTop: "20px" }}>
      <h4>FruitList</h4>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
};

export default FruitList;
