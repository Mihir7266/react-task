import React, { useState, useEffect } from "react";
import "./UserDashboard.css";

function UserDashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Simulate API call
  useEffect(() => {
    setTimeout(() => {
      try {
        // Simulate random success/failure
        if (Math.random() > 0.3) {
          setUser({
            name: "John Doe",
            email: "john@example.com",
            role: "admin",
          });
        } else {
          throw new Error("Failed to load user data");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }, 2000);
  }, []);

  // Loading state
  if (loading) {
    return (
      <div className="loading">
        <h2>Loading...</h2>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="error">
        <h2>Error: {error}</h2>
        <button className="btn-primary" onClick={() => window.location.reload()}>
          Retry
        </button>
      </div>
    );
  }

  // Success state
  return (
    <div className="dashboard">
      <h1>User Dashboard</h1>
      {user && (
        <div className="user-info">
          <h2>Welcome, {user.name}!</h2>
          <p>Email: {user.email}</p>

          {user.role === "admin" && (
            <div className="admin-panel">
              <h3>Admin Panel</h3>
              <button className="btn-primary">Manage Users</button>
              <button className="btn-success">System Settings</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default UserDashboard;
