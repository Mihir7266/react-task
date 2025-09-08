import React, { useState } from "react";
import "./ShoppingCart.css";

function ShoppingCart() {
  const [items, setItems] = useState([
    { name: "Apple", price: 2 },
    { name: "Banana", price: 3 },
  ]);
  const [total, setTotal] = useState(5);

  // Add Item
  const addItem = (item) => {
    setItems([...items, item]);
    setTotal(total + item.price);
  };

  // Remove Item
  const removeItem = (index) => {
    const removedItem = items[index];
    setItems(items.filter((_, i) => i !== index));
    setTotal(total - removedItem.price);
  };

  // Update Item
  const updateItem = (index, updatedItem) => {
    const oldItem = items[index];
    const newItems = items.map((item, i) =>
      i === index ? updatedItem : item
    );

    // Update state
    setItems(newItems);
    setTotal(total - oldItem.price + updatedItem.price);
  };

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      <div className="items">
        {items.map((item, index) => (
          <CartItem
            key={index}
            item={item}
            onRemove={() => removeItem(index)}
            onUpdate={(updatedItem) => updateItem(index, updatedItem)}
          />
        ))}
      </div>
      <div className="total">
        <h3>Total: ${total.toFixed(2)}</h3>
      </div>
      <AddItemForm onAddItem={addItem} />
    </div>
  );
}

// Cart Item with Update Button
function CartItem({ item, onRemove, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(item.name);
  const [price, setPrice] = useState(item.price);

  const handleUpdate = () => {
    onUpdate({ name, price: parseFloat(price) });
    setIsEditing(false);
  };

  return (
    <div className="cart-item">
      {isEditing ? (
        <>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <button onClick={handleUpdate}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          <span>{item.name}</span>
          <span>${item.price}</span>
          <button onClick={() => setIsEditing(true)}>Update</button>
          <button onClick={onRemove}>Remove</button>
        </>
      )}
    </div>
  );
}

// Form for Adding Items
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
    <form onSubmit={handleSubmit} className="add-item-form">
      <input
        type="text"
        placeholder="Item name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button type="submit">Add Item</button>
    </form>
  );
}

export default ShoppingCart;
