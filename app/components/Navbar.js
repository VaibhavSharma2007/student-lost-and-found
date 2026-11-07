
"use client";

import { useAppContext } from "../context/AppContext";

export default function Navbar() {
  const { loggedInUser, logout } = useAppContext();

  const handleLogout = () => {
    logout();
    alert("You have logged out successfully!");
  };

  return (
    <nav className="navbar">
      <h2 className="logo">FindIt</h2>

      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/#complaints">Browse Items</a>
        <a href="/#file-complaint">File a Complaint</a>

        {loggedInUser ? (
          <button className="nav-logout" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <>
            <a href="/login">Login</a>
            <a href="/signup">Sign Up</a>
          </>
        )}
      </div>
    </nav>
  );
}
