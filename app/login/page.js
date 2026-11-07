
"use client";

import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const hashPassword = async (password) => {
    const data = new TextEncoder().encode(password);
    const hash = await crypto.subtle.digest("SHA-256", data);

    return Array.from(new Uint8Array(hash))
      .map((byte) => byte.toString(16).padStart(2, "0"))
      .join("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const savedUser = localStorage.getItem("user");

    if (!savedUser) {
      alert("No account found. Please sign up first.");
      return;
    }

    try {
      const user = JSON.parse(savedUser);
      const enteredPasswordHash = await hashPassword(password);

      if (
        email.trim().toLowerCase() === user.email.toLowerCase() &&
        enteredPasswordHash === user.passwordHash
      ) {
        const loggedInUser = {
          fullName: user.fullName,
          phone: user.phone,
          email: user.email,
        };

        localStorage.setItem(
          "loggedInUser",
          JSON.stringify(loggedInUser)
        );

        alert("Login successful! Welcome, " + user.fullName);

        window.location.href = "/";
      } else {
        alert("Incorrect email or password.");
      }
    } catch (error) {
      alert("Login failed. Please try again.");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1>Welcome Back!</h1>

        <p>Login to your FindIt student account.</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email Address</label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>

          <button type="submit" className="auth-btn">
            Login
          </button>
        </form>

        <p className="auth-switch">
          Don't have an account?{" "}
          <a href="/signup">Sign Up</a>
        </p>

        <a href="/" className="back-home">
          Back to Home
        </a>
      </div>
    </div>
  );
}
