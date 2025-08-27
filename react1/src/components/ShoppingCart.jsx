import React, { useState } from "react";
import CartItem from "./CartItem";
import AddItemForm from "./AddItemForm";
import "./ShoppingCart.css";

function ShoppingCart() {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  const addItem = (item) => {
    setItems([...items, item]);
    setTotal(total + item.price);
  };

  const removeItem = (index) => {
    const removedItem = items[index];
    setItems(items.filter((_, i) => i !== index));
    setTotal(total - removedItem.price);
  };

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      <div className="items">
        {items.map((item, index) => (
          <CartItem key={index} item={item} onRemove={() => removeItem(index)} />
        ))}
      </div>
      <div className="total">
        <h3>Total: ${total.toFixed(2)}</h3>
      </div>
      <AddItemForm onAddItem={addItem} />
    </div>
  );
}

export default ShoppingCart;
