// Importing React, along with two special React hooks: useEffect and useState.
// - useState is used to store and update values that can change.
// - useEffect lets us run some code automatically when certain values change.
import React, { useEffect, useState } from "react";

// Defining a functional React component called "GroceryList".
// It accepts a prop called "items", which is expected to be an array of strings.
// If no items are provided, it defaults to an empty array ([]).
const GroceryList = ({ items = [] }) => {
  // A helper function to convert plain strings into objects like { id, text }.
  // This ensures every item has a unique "id" (needed for React lists).
  const toItemObjects = (arr) => arr.map((text, i) => ({ id: `${text}-${i}`, text }));

  // Setting up state for the list of grocery items.
  // Initially, it takes the items from props and converts them into objects with IDs.
  const [list, setList] = useState(() => toItemObjects(items));

  // State for tracking what the user types into the input box.
  const [input, setInput] = useState("");

  // If the "items" prop changes later, this useEffect will update the list.
  useEffect(() => {
    setList(toItemObjects(items));
    // [we are using variables i.e. var]
  }, [items]);

  // Function to add a new item to the grocery list.
  const addItem = () => {
    // Trim extra spaces from input text.
    const text = input.trim();
    if (!text) return; // If input is empty, do nothing.

    // Generate a unique ID for the item.
    // Even if the same text is added twice, IDs will be different.
    const baseId = text.toLowerCase().replace(/\s+/g, "-");
    let id = baseId;
    let n = 1;
    const existingIds = new Set(list.map((it) => it.id));
    while (existingIds.has(id)) {
      id = `${baseId}-${n++}`; // Append -1, -2, etc. if duplicate
    }

    // Add the new item to the list and clear the input box.
    setList((prev) => [...prev, { id, text }]);
    setInput("");
  };

  // If the user presses the "Enter" key while typing, add the item automatically.
  // anonymous inline arrow function
  const handleKeyDown = (e) => {
    if (e.key === "Enter") addItem();
  };

  // Function that runs when "Add to Cart" button is clicked.
  // For now, it just shows an alert popup.
  const handleAddToCart = () => {
    alert("Groceries Added to Cart!");
  };

  // Simple inline styles (instead of a separate CSS file).
  // These styles define how the component looks.
  const styles = {
    wrapper: {
      maxWidth: 700,
      margin: "24px auto",
      padding: "16px",
      fontFamily:
        'system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
    },
    title: { fontSize: 32, margin: "0 0 12px" },
    addBar: { display: "flex", gap: 8, margin: "0 0 16px" },
    input: { flex: 1, padding: "10px 12px", fontSize: 16, border: "1px solid #ccc", borderRadius: 8 },
    addBtn: { padding: "10px 16px", fontSize: 16, cursor: "pointer", borderRadius: 8 },
    list: { marginLeft: 24, fontSize: 18, lineHeight: 1.5, marginBottom: 16 },
    cartBtn: {
      padding: "10px 16px",
      fontSize: 16,
      cursor: "pointer",
      borderRadius: 8,
      border: "2px solid #bfc5ce",
      background: "#fff",
    },
  };

  // What appears on the screen (UI).
  return (
    <div style={styles.wrapper}>
      {/* Page Title */}
      <h1 style={styles.title}>Groceries List:</h1>

      {/* Input field + Add button (the "Add bar") */}
      <div style={styles.addBar}>
        {/* Text input where the user types the grocery name */}
        <input
          style={styles.input}
          type="text"
          placeholder="Add a grocery (e.g., Eggs)"
          value={input}
          onChange={(e) => setInput(e.target.value)} // Updates input state on typing
          onKeyDown={handleKeyDown} // Press Enter to add item
          aria-label="Grocery name"
        />
        {/* Button to add the typed grocery item into the list.
            Disabled if the input is empty. */}
        <button type="button" style={styles.addBtn} onClick={addItem} disabled={!input.trim()}>
          Add
        </button>
      </div>

      {/* Dynamic grocery list. Loops through "list" and shows each item in <li>. */}
      <ul style={styles.list}>
        {list.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>

      {/* "Add to Cart" button shows a popup alert when clicked. */}
      <button type="button" style={styles.cartBtn} onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};

// Exporting GroceryList so it can be used in other files (like App.js).
export default GroceryList;
