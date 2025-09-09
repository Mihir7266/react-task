import React, { useState } from "react";

function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({
    // Personal Info
    firstName: "",
    lastName: "",
    email: "",
    // Address Info
    street: "",
    city: "",
    zipCode: "",
    // Preferences
    newsletter: false,
    notifications: false,
  });

  // Update form state
  const updateFormData = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Navigation
  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);

  // Final submission
  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    alert("✅ Form submitted successfully!");
  };

  return (
    <div style={styles.container}>
      <h1>Multi-Step Form</h1>

      {/* Progress bar */}
      <div style={styles.progressBar}>
        <div style={{ ...styles.step, ...(currentStep >= 1 ? styles.active : {}) }}>
          1
        </div>
        <div style={{ ...styles.step, ...(currentStep >= 2 ? styles.active : {}) }}>
          2
        </div>
        <div style={{ ...styles.step, ...(currentStep >= 3 ? styles.active : {}) }}>
          3
        </div>
      </div>

      {/* Step rendering */}
      {currentStep === 1 && (
        <PersonalInfo data={formData} updateData={updateFormData} onNext={nextStep} />
      )}
      {currentStep === 2 && (
        <AddressInfo
          data={formData}
          updateData={updateFormData}
          onNext={nextStep}
          onPrev={prevStep}
        />
      )}
      {currentStep === 3 && (
        <Preferences
          data={formData}
          updateData={updateFormData}
          onSubmit={handleSubmit}
          onPrev={prevStep}
        />
      )}
    </div>
  );
}

// Step 1: Personal Info
function PersonalInfo({ data, updateData, onNext }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.firstName && data.lastName && data.email) {
      onNext();
    } else {
      alert("⚠️ Please fill all fields.");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2>Personal Information</h2>
      <input
        type="text"
        placeholder="First Name"
        value={data.firstName}
        onChange={(e) => updateData("firstName", e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Last Name"
        value={data.lastName}
        onChange={(e) => updateData("lastName", e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={data.email}
        onChange={(e) => updateData("email", e.target.value)}
        required
      />
      <button type="submit">Next ➡️</button>
    </form>
  );
}

// Step 2: Address Info
function AddressInfo({ data, updateData, onNext, onPrev }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.street && data.city && data.zipCode) {
      onNext();
    } else {
      alert("⚠️ Please fill all fields.");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2>Address Information</h2>
      <input
        type="text"
        placeholder="Street Address"
        value={data.street}
        onChange={(e) => updateData("street", e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="City"
        value={data.city}
        onChange={(e) => updateData("city", e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="ZIP Code"
        value={data.zipCode}
        onChange={(e) => updateData("zipCode", e.target.value)}
        required
      />
      <div style={styles.buttonGroup}>
        <button type="button" onClick={onPrev}>
          ⬅️ Previous
        </button>
        <button type="submit">Next ➡️</button>
      </div>
    </form>
  );
}

// Step 3: Preferences
function Preferences({ data, updateData, onSubmit, onPrev }) {
  return (
    <div style={styles.form}>
      <h2>Preferences</h2>
      <label>
        <input
          type="checkbox"
          checked={data.newsletter}
          onChange={(e) => updateData("newsletter", e.target.checked)}
        />
        Subscribe to newsletter
      </label>
      <label>
        <input
          type="checkbox"
          checked={data.notifications}
          onChange={(e) => updateData("notifications", e.target.checked)}
        />
        Enable notifications
      </label>
      <div style={styles.buttonGroup}>
        <button onClick={onPrev}>⬅️ Previous</button>
        <button onClick={onSubmit}>✅ Submit</button>
      </div>
    </div>
  );
}

// Basic styles
const styles = {
  container: {
    maxWidth: "400px",
    margin: "0 auto",
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
  },
  progressBar: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
  },
  step: {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    background: "#ccc",
    color: "#fff",
    textAlign: "center",
    lineHeight: "30px",
  },
  active: {
    background: "#007bff",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "10px",
  },
};

export default MultiStepForm;
