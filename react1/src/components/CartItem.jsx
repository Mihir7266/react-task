import React from "react";

function CartItem({ item, onRemove }) {
  return (
    <div className="cart-item" style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "10px 0",
      borderBottom: "1px solid #e5e7eb"
    }}>
      <span>{item.name}</span>
      <span>${item.price.toFixed(2)}</span>
      <button className="btn-danger" onClick={onRemove}>Remove</button>
    </div>
  );
}

export default CartItem;
