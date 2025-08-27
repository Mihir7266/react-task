import React from "react";
import "./StatusMessage.css";

function StatusMessage({ status }) {
  const renderMessage = () => {
    switch (status) {
      case "loading":
        return <div className="loading">⏳ Loading...</div>;
      case "success":
        return <div className="success">✅ Operation completed!</div>;
      case "error":
        return <div className="error">❌ Something went wrong!</div>;
      default:
        return <div className="info">ℹ️ Ready to start</div>;
    }
  };

  return <div className="status-container">{renderMessage()}</div>;
}

export default StatusMessage;
