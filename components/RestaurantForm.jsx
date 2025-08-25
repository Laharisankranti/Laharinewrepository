import React, { useState, useEffect } from "react";

const RestaurantForm = () => {
  const [formData, setFormData] = useState({
    restaurantName: "",
    ownerName: "",
    email: "",
    contact: "",
    address: "",
    cuisine: "",
    hours: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  // 1. Run on every render
  useEffect(() => {
    console.log("Component re-rendered");
  });

  // 2. Run only once (on mount)
  useEffect(() => {
    console.log("Restaurant Form Mounted ✅");
  }, []);

  // 3. Run whenever form data changes
  useEffect(() => {
    console.log("Form data changed:", formData);
  }, [formData]);

  // 4. Auto-save every 5 seconds (with cleanup)
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("💾 Auto-saving form data:", formData);
    }, 5000);

    return () => {
      clearInterval(interval);
      console.log("🧹 Cleaned up auto-save interval");
    };
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
    console.log("✅ Form submitted:", formData);
  };

  return (
    <div style={{ maxWidth: "500px", margin: "auto", fontFamily: "Arial" }}>
      <h1>🍴 Restaurant Registration Form</h1>
      <p>Welcome to Restaurant Registration 🏬</p>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <input type="text" name="restaurantName" placeholder="Restaurant Name" value={formData.restaurantName} onChange={handleChange} required />
        <input type="text" name="ownerName" placeholder="Owner Name" value={formData.ownerName} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="text" name="contact" placeholder="Contact Number" value={formData.contact} onChange={handleChange} required />
        <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
        <input type="text" name="cuisine" placeholder="Cuisine Type" value={formData.cuisine} onChange={handleChange} required />
        <input type="text" name="hours" placeholder="Opening Hours" value={formData.hours} onChange={handleChange} required />
        <button type="submit" style={{ padding: "10px", backgroundColor: "#007BFF", color: "white", border: "none", cursor: "pointer" }}>
          Submit
        </button>
      </form>

      {submittedData && (
        <div style={{ marginTop: "20px" }}>
          <h3>📑 Submitted Data (JSON)</h3>
          <pre>{JSON.stringify(submittedData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default RestaurantForm;
