import React, { useState } from "react";

// Parent component
function TemperatureConverter() {
  const [temperature, setTemperature] = useState("");
  const [scale, setScale] = useState("c");

  // Handle changes in Celsius input
  const handleCelsiusChange = (temp) => {
    setTemperature(temp);
    setScale("c");
  };

  // Handle changes in Fahrenheit input
  const handleFahrenheitChange = (temp) => {
    setTemperature(temp);
    setScale("f");
  };

  // Calculate values for both inputs
  const celsius =
    scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
  const fahrenheit =
    scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto", padding: "20px" }}>
      <h2>Temperature Converter</h2>

      {/* Celsius input */}
      <TemperatureInput
        scale="c"
        temperature={celsius}
        onTemperatureChange={handleCelsiusChange}
      />

      {/* Fahrenheit input */}
      <TemperatureInput
        scale="f"
        temperature={fahrenheit}
        onTemperatureChange={handleFahrenheitChange}
      />

      {/* Verdict */}
      <BoilingVerdict celsius={parseFloat(celsius)} />
    </div>
  );
}

// Child component: Input field
function TemperatureInput({ scale, temperature, onTemperatureChange }) {
  const handleChange = (e) => {
    onTemperatureChange(e.target.value);
  };

  const scaleNames = {
    c: "Celsius",
    f: "Fahrenheit",
  };

  return (
    <fieldset style={{ marginBottom: "15px" }}>
      <legend>Enter temperature in {scaleNames[scale]}:</legend>
      <input
        value={temperature}
        onChange={handleChange}
        style={{ width: "100%", padding: "8px" }}
      />
    </fieldset>
  );
}

// Child component: Verdict
function BoilingVerdict({ celsius }) {
  if (Number.isNaN(celsius)) {
    return <p>Please enter a valid number.</p>;
  }
  if (celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

// Utility functions
function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

export default TemperatureConverter;
