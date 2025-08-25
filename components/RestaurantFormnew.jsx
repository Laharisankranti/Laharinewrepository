import React, { useState, useEffect } from "react";

const RestaurantFormNew = () => {
  // 🔹 State to hold form input values
  const [formData, setFormData] = useState({
    restaurantName: "",
    ownerName: "",
    email: "",
    contact: "",
    address: "",
    cuisine: "",
    openingHours: "",
  });

  // 🔹 State to store submitted data after form submission
  const [submittedData, setSubmittedData] = useState(null);

  // 👉 Runs on EVERY render (no dependency array)
  useEffect(() => {
    console.log("Restaurant Form Rendered");
  });

  // 👉 Runs ONCE when the component mounts (empty dependency array)
  useEffect(() => {
    console.log("Welcome to Restaurant Registration Form 🍴");
  }, []);

  // 👉 Runs whenever any value inside `formData` changes
  useEffect(() => {
    console.log("Form data updated:", formData);
  }, [formData]);

  // 👉 Auto-save simulation every 5 seconds
  // This will log the current form data periodically
  // Cleanup ensures old intervals don’t pile up
  useEffect(() => {
    const autoSave = setInterval(() => {
      console.log("Auto-saving form data...", formData);
    }, 5000);

    return () => {
      clearInterval(autoSave);
      console.log("⏱ Auto-save interval cleared");
    };
  }, [formData]);

  // 🔹 Handles input changes and updates state dynamically
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,   // spread old values
      [name]: value, // update the changed field
    });
  };

  // 🔹 Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault();          // prevent page reload
    setSubmittedData(formData);  // store submitted form data
    console.log("Form submitted:", formData);
  };

  // ---------------- UI SECTION ----------------
  return (
    <div style={{ maxWidth: "500px", margin: "20px auto", fontFamily: "Arial" }}>
      <h1>🍴 Restaurant Registration Form</h1>
      <p>Welcome to Restaurant Registration 🏬</p>

      {/* FORM START */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="restaurantName"
          placeholder="Restaurant Name"
          value={formData.restaurantName}
          onChange={handleChange}
          required
        />
        <br />

        <input
          type="text"
          name="ownerName"
          placeholder="Owner Name"
          value={formData.ownerName}
          onChange={handleChange}
          required
        />
        <br />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <br />

        <input
          type="text"
          name="contact"
          placeholder="Contact Number"
          value={formData.contact}
          onChange={handleChange}
          required
        />
        <br />

        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <br />

        <input
          type="text"
          name="cuisine"
          placeholder="Cuisine Type"
          value={formData.cuisine}
          onChange={handleChange}
          required
        />
        <br />

        <input
          type="text"
          name="openingHours"
          placeholder="Opening Hours"
          value={formData.openingHours}
          onChange={handleChange}
          required
        />
        <br />

        <button type="submit">Submit</button>
      </form>
      {/* FORM END */}

      {/* Show submitted data as JSON (pretty-printed) */}
      {submittedData && (
        <div style={{ marginTop: "20px" }}>
          <h3>📂 Submitted Data (JSON)</h3>
          <pre>{JSON.stringify(submittedData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default RestaurantFormNew;
