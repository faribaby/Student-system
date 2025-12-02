"use client";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "faridaabdulsalam966@gmail.com" && password === "far212004") {
      localStorage.setItem("isLoggedIn", "true");
      alert("Login successful!");
      window.location.href = "/dashboard";
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div style={{
      display: "flex", flexDirection: "column", alignItems: "center",
      justifyContent: "center", height: "100vh"
    }}>
      <h2>Admin Login</h2>
      <form onSubmit={handleLogin} style={{ width: "300px" }}>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
