import React from "react";

// Basic functional component
export function HelloWorld() {
  return <h1>Hello, World!</h1>;
}

// With props
export function Welcome({ name, age }) {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>You are {age} years old</p>
    </div>
  );
}
