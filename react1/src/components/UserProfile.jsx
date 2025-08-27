import React from "react";
import "./UserProfile.css";

function UserProfile({ user }) {
  const { name, email, avatar, isOnline } = user;
  return (
    <div className="user-profile">
      <div className="avatar-container">
        <img src={avatar} alt={`${name}'s avatar`} />
        <span className={`status ${isOnline ? "online" : "offline"}`}>
          {isOnline ? "🟢" : "🔴"}
        </span>
      </div>
      <div className="user-info">
        <h3>{name}</h3>
        <p>{email}</p>
        <button className="message-btn">Send Message</button>
      </div>
    </div>
  );
}

export default UserProfile;
