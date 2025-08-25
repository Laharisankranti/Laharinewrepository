import React, { Component } from "react";

// Define a class-based React component called MovieForm
class MovieForm extends Component {
  constructor(props) {
    super(props); // Call the parent class (Component) constructor
    console.log("constructor executed");

    // Initialize state with default values
    this.state = {
      title: "",        // Movie title
      director: "",     // Movie director
      year: "",         // Release year
      genre: "Action",  // Default genre
      rating: "",       // Movie rating (1–5)
      description: "",  // Movie description
      platforms: {      // Streaming platforms availability
        netflix: false,
        prime: false,
        disney: false,
        others: false,
      },
      movies: [],       // List of all movies submitted
    };
  }

  // Lifecycle method: Runs before rendering when new props are received
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps executed");
    return null; // No changes to state
  }

  // Lifecycle method: Runs once after component is mounted to the DOM
  componentDidMount() {
    console.log("componentDidMount executed");

    // Add a default movie when the component loads
    const defaultMovie = {
      title: "The Hero's Journey",
      director: "Susan Smith",
      year: "2023",
      genre: "Action",
      rating: "4",
      description: "A story of a hero's journey",
      platforms: ["Netflix", "Amazon Prime"],
    };

    // Update state with the default movie
    this.setState({ movies: [defaultMovie] });
  }

  // Lifecycle method: Decides whether component should re-render
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate executed");
    return true; // Always allow re-render
  }

  // Lifecycle method: Captures state/props before update (rarely used)
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate executed");
    return null;
  }

  // Lifecycle method: Runs after component updates
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate executed");
  }

  // Lifecycle method: Runs just before the component is removed from the DOM
  componentWillUnmount() {
    console.log("componentWillUnmount executed");
  }

  // Handles form input changes
  handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // If the input is a checkbox, update the 'platforms' object
    if (type === "checkbox") {
      this.setState((prevState) => ({
        platforms: {
          ...prevState.platforms, // Keep other platforms unchanged
          [name]: checked,        // Update only the toggled checkbox
        },
      }));
    } else {
      // For normal inputs, update state directly
      this.setState({ [name]: value });
    }
  };

  // Handles form submission
  handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh

    const { title, director, year, genre, rating, description, platforms } = this.state;

    // Convert selected platforms from object to array of strings
    const selectedPlatforms = Object.keys(platforms)
      .filter((key) => platforms[key]) // Keep only checked ones
      .map((key) =>
        key === "netflix"
          ? "Netflix"
          : key === "prime"
          ? "Amazon Prime"
          : key === "disney"
          ? "Disney+"
          : "Others"
      );

    // Create new movie object
    const newMovie = {
      title,
      director,
      year,
      genre,
      rating,
      description,
      platforms: selectedPlatforms,
    };

    // Add new movie to state and reset form fields
    this.setState((prevState) => ({
      movies: [...prevState.movies, newMovie], // Append new movie
      title: "",
      director: "",
      year: "",
      genre: "Action",
      rating: "",
      description: "",
      platforms: {
        netflix: false,
        prime: false,
        disney: false,
        others: false,
      },
    }));
  };

  render() {
    console.log("render executed");

    // Extract state values for easy use
    const { title, director, year, genre, rating, description, platforms, movies } = this.state;

    return (
      <div className="container mt-4">
        {/* Movie form card */}
        <div className="card p-4">
          <h3>Add Movie</h3>
          <form onSubmit={this.handleSubmit}>
            
            {/* Movie Title Input */}
            <div className="mb-3">
              <label className="form-label">Movie Title</label>
              <input
                type="text"
                className="form-control"
                name="title"
                value={title}
                onChange={this.handleChange}
                required
              />
            </div>

            {/* Director Input */}
            <div className="mb-3">
              <label className="form-label">Director</label>
              <input
                type="text"
                className="form-control"
                name="director"
                value={director}
                onChange={this.handleChange}
                required
              />
            </div>

            {/* Release Year Input */}
            <div className="mb-3">
              <label className="form-label">Release Year</label>
              <input
                type="number"
                className="form-control"
                name="year"
                value={year}
                onChange={this.handleChange}
                required
              />
            </div>

            {/* Genre Dropdown */}
            <div className="mb-3">
              <label className="form-label">Genre</label>
              <select
                className="form-select"
                name="genre"
                value={genre}
                onChange={this.handleChange}
              >
                <option>Action</option>
                <option>Comedy</option>
                <option>Drama</option>
                <option>Sci-Fi</option>
                <option>Horror</option>
              </select>
            </div>

            {/* Rating (Radio Buttons) */}
            <div className="mb-3">
              <label className="form-label">Rating</label> <br />
              {[1, 2, 3, 4, 5].map((num) => (
                <label key={num} className="me-3">
                  <input
                    type="radio"
                    name="rating"
                    value={num}
                    checked={rating === String(num)}
                    onChange={this.handleChange}
                  />{" "}
                  {num}
                </label>
              ))}
            </div>

            {/* Description Textarea */}
            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea
                className="form-control"
                name="description"
                value={description}
                onChange={this.handleChange}
              ></textarea>
            </div>

            {/* Platforms Checkboxes */}
            <div className="mb-3">
              <label className="form-label">Available on Streaming Platforms</label> <br />
              <label className="me-3">
                <input
                  type="checkbox"
                  name="netflix"
                  checked={platforms.netflix}
                  onChange={this.handleChange}
                /> Netflix
              </label>
              <label className="me-3">
                <input
                  type="checkbox"
                  name="prime"
                  checked={platforms.prime}
                  onChange={this.handleChange}
                /> Amazon Prime
              </label>
              <label className="me-3">
                <input
                  type="checkbox"
                  name="disney"
                  checked={platforms.disney}
                  onChange={this.handleChange}
                /> Disney+
              </label>
              <label className="me-3">
                <input
                  type="checkbox"
                  name="others"
                  checked={platforms.others}
                  onChange={this.handleChange}
                /> Others
              </label>
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-primary">
              Add Movie
            </button>
          </form>
        </div>

        {/* Movie List Table */}
        {movies.length > 0 && (
          <div className="mt-4">
            <table className="table table-bordered">
              <thead className="table-dark">
                <tr>
                  <th>Title</th>
                  <th>Director</th>
                  <th>Release Year</th>
                  <th>Genre</th>
                  <th>Rating</th>
                  <th>Available on</th>
                </tr>
              </thead>
              <tbody>
                {movies.map((movie, index) => (
                  <tr key={index}>
                    <td>{movie.title}</td>
                    <td>{movie.director}</td>
                    <td>{movie.year}</td>
                    <td>{movie.genre}</td>
                    <td>{movie.rating}</td>
                    <td>{movie.platforms.join(", ")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  }
}

export default MovieForm;
