import React from "react";

// A functional component that displays a list of famous temples in India
const TempleList = () => {
  // Data: array of temples, each temple has id, name, location, and deities
  const temples = [
    {
      id: 1,
      name: "Meenakshi Amman Temple",
      location: "Madurai, Tamil Nadu",
      deities: ["Meenakshi", "Sundareshwarar"],
    },
    {
      id: 2,
      name: "Sri Venkateswara Temple",
      location: "Tirupati, Andhra Pradesh",
      deities: ["Venkateswara", "Lakshmi"],
    },
    {
      id: 3,
      name: "Jagannath Temple",
      location: "Puri, Odisha",
      deities: ["Jagannath", "Balabhadra", "Subhadra"],
    },
  ];

  // UI (what appears on the screen)
  return (
    <div style={{ maxWidth: "800px", margin: "auto", fontFamily: "Arial" }}>
      {/* Page title */}
      <h2>🛕 Famous Temples in India</h2>

      {/* Table to display temple details */}
      <table
        border="1"
        cellPadding="10"
        cellSpacing="0"
        style={{ width: "100%", borderCollapse: "collapse" }}
      >
        {/* Table Headings */}
        <thead>
          <tr>
            <th>ID</th>
            <th>Temple Name</th>
            <th>Location</th>
            <th>Deities</th>
          </tr>
        </thead>

        {/* Table Body: Looping through each temple */}
        <tbody>
          {temples.map((temple) => (
            <tr key={temple.id}>
              {/* Temple ID */}
              <td>{temple.id}</td>

              {/* Temple Name */}
              <td>{temple.name}</td>

              {/* Temple Location */}
              <td>{temple.location}</td>

              {/* Temple Deities → shown as a bullet list inside table cell */}
              <td>
                <ul>
                  {temple.deities.map((deity, index) => (
                    <li key={index}>{deity}</li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Exporting the component so it can be used in App.js
export default TempleList;
