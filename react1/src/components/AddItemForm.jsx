import React, { useState } from "react";

function AddItemForm({ onAddItem }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !price) return;
    onAddItem({ name, price: parseFloat(price) });
    setName("");
    setPrice("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", gap: "0.5rem", marginTop: "1rem" }}
    >
      <input
        type="text"
        placeholder="Item name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          flex: 1,
          padding: "8px",
          borderRadius: "6px",
          border: "1px solid #d1d5db",
        }}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        style={{
          width: "100px",
          padding: "8px",
          borderRadius: "6px",
          border: "1px solid #d1d5db",
        }}
      />
      <button type="submit" className="btn-primary">Add</button>
    </form>
  );
}

export default AddItemForm;
