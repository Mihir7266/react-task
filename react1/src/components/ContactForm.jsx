import React, { useState } from 'react';
import "./ContactForm.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert(`Form submitted by ${formData.name}`);
  };

  // Reset form
  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  // Function reference example
  function handleClickRef() {
    alert('Button clicked with Function Reference!');
  }

  // Arrow function example
  const handleClickArrow = () => {
    alert('Button clicked with Arrow Function!');
  };

return (
  <div className="form-container">
    <div className="form-header">
      <h2>Contact Us</h2>
    </div>

    <div className="form-body">
      <div className="form-group">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Message:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
        />
      </div>
    </div>

    <div className="form-footer">
      <button type="submit">Submit</button>
      <button type="button" onClick={handleReset}>Reset</button>
    </div>
  </div>
);

}

export default ContactForm;
