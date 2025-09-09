import React from "react";
import Game from "./components/test1/Game";
import ContactForm from "./components/test1/contactform";
import TemperatureConverter from "./components/test1/temocon";
import ShoppingApp from "./components/test1/ShoppingCart";
import MultiStepForm from "./components/test1/Multistepform";
import "./App.css";

function App() {
  return (

    <div className="App">
      <h2>Click me a fue seconds </h2>
      <Game />
      <br></br>
      <ContactForm />     
      <br></br>
      <TemperatureConverter />
      <br></br>
      <ShoppingApp />
      <br></br>
      <MultiStepForm />
    </div>
  );
}

export default App;
