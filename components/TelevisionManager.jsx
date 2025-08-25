import React, { Component } from "react";

// Functional Component to display the television models
function TelevisionList({ models }) {
  return (
    <div>
      <h3>Available Television Models</h3>
      <ul>
        {models.map((model, index) => (
          <li key={index}>{model}</li>
        ))}
      </ul>
    </div>
  );
}

// Class Component to manage the list of television models
class TelevisionManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      models: ["Samsung QLED", "Sony Bravia", "LG OLED"],
      newModel: "",
    };
  }

  handleChange = (e) => {
    this.setState({ newModel: e.target.value });
  };

  addModel = () => {
    if (this.state.newModel.trim() === "") return;
    this.setState((prevState) => ({
      models: [...prevState.models, prevState.newModel], // ✅ spread operator
      newModel: "",
    }));
  };

  render() {
    return (
      <div className="container mt-4">
        <h2>Television Manager</h2>
        <div className="mb-3">
          <input
            type="text"
            value={this.state.newModel}
            onChange={this.handleChange}
            placeholder="Enter new television model"
          />
          <button
            className="btn btn-primary ms-2"
            onClick={this.addModel}
          >
            Add Model
          </button>
        </div>

        {/* Inject Functional Component */}
        <TelevisionList models={this.state.models} />
      </div>
    );
  }
}

export default TelevisionManager;
