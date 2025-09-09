import React, { useState } from "react";

function ShoppingApp() {
  const [cartItems, setCartItems] = useState([]);
  const [products] = useState([
    { id: 1, name: "Laptop", price: 999 },
    { id: 2, name: "Mouse", price: 29 },
    { id: 3, name: "Keyboard", price: 79 },
    { id: 4, name: "Screen", price: 199}
  ]);


  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };


  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

 
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };


  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div style={styles.app}>
      <h1>🛒 Shopping Cart Demo</h1>
      <div style={styles.content}>
        <ProductList products={products} onAddToCart={addToCart} />
        <Cart
          items={cartItems}
          onRemoveFromCart={removeFromCart}
          onUpdateQuantity={updateQuantity}
          totalPrice={getTotalPrice()}
        />
      </div>
    </div>
  );
}

function ProductList({ products, onAddToCart }) {
  return (
    <div style={styles.productList}>
      <h2>Products</h2>
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}


function ProductItem({ product, onAddToCart }) {
  return (
    <div style={styles.productItem}>
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button style={styles.button} onClick={() => onAddToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}


function Cart({ items, onRemoveFromCart, onUpdateQuantity, totalPrice }) {
  return (
    <div style={styles.cart}>
      <h2>Shopping Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {items.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onRemove={onRemoveFromCart}
              onUpdateQuantity={onUpdateQuantity}
            />
          ))}
          <div style={styles.total}>
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
          </div>
        </>
      )}
    </div>
  );
}


function CartItem({ item, onRemove, onUpdateQuantity }) {
  return (
    <div style={styles.cartItem}>
      <h4>{item.name}</h4>
      <p>${item.price} each</p>
      <div style={styles.quantityControls}>
        <button
          style={styles.smallButton}
          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
        >
          -
        </button>
        <span>Quantity: {item.quantity}</span>
        <button
          style={styles.smallButton}
          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
        >
          +
        </button>
      </div>
      <button style={styles.removeButton} onClick={() => onRemove(item.id)}>
        Remove
      </button>
    </div>
  );
}


const styles = {
  app: {
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    textAlign: "center",
  },
  content: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "20px",
  },
  productList: {
    border: "1px solid #ddd",
    padding: "15px",
    borderRadius: "8px",
    width: "40%",
  },
  productItem: {
    marginBottom: "15px",
    padding: "10px",
    border: "1px solid #eee",
    borderRadius: "6px",
  },
  cart: {
    border: "1px solid #ddd",
    padding: "15px",
    borderRadius: "8px",
    width: "40%",
    textAlign: "left",
  },
  cartItem: {
    borderBottom: "1px solid #eee",
    padding: "10px 0",
  },
  quantityControls: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    margin: "10px 0",
  },
  button: {
    padding: "6px 12px",
    background: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  smallButton: {
    padding: "4px 8px",
    background: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  removeButton: {
    padding: "4px 10px",
    background: "#dc3545",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  total: {
    marginTop: "20px",
    fontWeight: "bold",
    fontSize: "18px",
  },
};

export default ShoppingApp;
