import React from "react";
import { HelloWorld, Welcome } from "./components/Welcome";
import UserProfile from "./components/UserProfile";
import Counter from "./components/Counter";
import ShoppingCart from "./components/ShoppingCart";
import UserDashboard from "./components/UserDashboard";

import ContactForm from "./components/ContactForm";

import "./App.css";

function App() {
  const userData = {
    name: "MIHIR VORA",
    email: "mihirvora@gmail.com",
    avatar: "mihir.jpg",
    isOnline: true,
  };

  return (
    <div className="App">
      <h1>React Demo Dashboard</h1>

      <div className="section">
        <h2>Welcome Components</h2>
        <div className="card-grid">
          <HelloWorld />
          <Welcome name="Mihir" age={19} />
          <Welcome name="Prins" age={19} />
        </div>
      </div>

      <div className="section">
        <h2>👤 User Profile</h2>
        <UserProfile user={userData} />
      </div>

      <div className="section">
        <h2>🔢 Counter</h2>
        <Counter />
      </div>

      <div className="section">
        <h2>🛒 Shopping Cart</h2>
        <ShoppingCart />
      </div>

      <div className="section">
        <h2>📊 User Dashboard</h2>
        <UserDashboard />
      </div>

      

      <div className="section">
        <h2>📩 Contact Form</h2>
        <ContactForm />
      </div>
    </div>
  );
}

export default App;
