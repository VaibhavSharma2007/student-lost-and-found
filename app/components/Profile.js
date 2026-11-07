
"use client";

import { useAppContext } from "../context/AppContext";

export default function Profile() {
  const { loggedInUser, logout } = useAppContext();

  if (!loggedInUser) {
    return null;
  }

  return (
    <section className="profile-section">
      <div className="profile-info">
        <div className="profile-avatar">
          {loggedInUser.fullName.charAt(0).toUpperCase()}
        </div>

        <div>
          <h2>Welcome, {loggedInUser.fullName}!</h2>
          <p>{loggedInUser.email}</p>
          <p>{loggedInUser.phone}</p>
        </div>
      </div>

      <button
        className="logout-btn"
        onClick={() => {
          logout();
          alert("You have logged out successfully!");
        }}
      >
        Logout
      </button>
    </section>
  );
}
