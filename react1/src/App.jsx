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
      
          <HelloWorld />
          <Welcome name="Mihir" age={19} />
          <Welcome name="Prins" age={19} />

        <UserProfile user={userData} />
      
        <Counter />

        <ShoppingCart />
     
        <UserDashboard />
      
        <ContactForm />
      
    </div>
  );
}

export default App;
