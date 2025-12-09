"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // List of admins
  const admins = [
    {
      email: "faridaabdulsalam966@gmail.com",
      password: "far212004",
    },
    {
      email: "sec@gmail.com",
      password: "sec123",  
    },
  ];

  // Redirect if already logged in
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn) {
      router.push("/");
    }
  }, [router]);

  const handleLogin = (e) => {
    e.preventDefault();

    // Check if user exists in admins list
    const adminFound = admins.find(
      (admin) => admin.email === email && admin.password === password
    );

    if (adminFound) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("adminEmail", email); // store which admin logged in
      router.push("/");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#f0f0f0",
      }}
    >
      <form
        onSubmit={handleLogin}
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "30px",
          borderRadius: "8px",
          background: "white",
          boxShadow: "0 0 10px rgba(0,0,0,0.2)",
          minWidth: "320px",
        }}
      >
        <h2 style={{ marginBottom: "20px", textAlign: "center" }}>Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
          required
        />

        <button
          type="submit"
          style={{
            padding: "10px",
            borderRadius: "4px",
            border: "none",
            background: "#1E90FF",
            color: "white",
            cursor: "pointer",
            marginTop: "5px",
            fontSize: "16px",
          }}
        >
          Login
        </button>

        {error && (
          <p style={{ color: "red", marginTop: "10px", textAlign: "center" }}>
            {error}
          </p>
        )}
      </form>
    </div>
  );
}
