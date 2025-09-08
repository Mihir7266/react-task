import React from "react";
import "./UserProfile.css";

function UserProfile() {
  // અહીં user data સીધું જ define કર્યું
  const user = {
    name: "Mihir Vora",
    email: "mihirvora57@gmail.com",
    avatar: "/mihir.jpg", // public ફોલ્ડરમાં ઇમેજ મૂકો
    isOnline: true,
  };

  return (
    <div className="user-profile">
      {/* અવતાર + સ્ટેટસ */}
      <div className="avatar-container">
        <img src={user.avatar} alt={`${user.name}'s avatar`} />
        <span className={`status ${user.isOnline ? "online" : "offline"}`}>
          {user.isOnline ? "🟢" : "🔴"}
        </span>
      </div>

      {/* યુઝર માહિતી */}
      <div className="user-info">
        <h3>{user.name}</h3>
        <p>{user.email}</p>
        <button className="message-btn">Send Message</button>
      </div>
    </div>
  );
}

export default UserProfile;
