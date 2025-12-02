"use client";
import React from "react";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <section
        style={{
          minHeight: "90vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          textAlign: "center",
          flexDirection: "column",
          padding: "0 20px",
        }}
      >
        <div
          style={{
            background: "#0A1A4F",
            padding: "40px",
            borderRadius: "15px",
            maxWidth: "700px",
          }}
        >
          <h1 style={{ fontSize: "2.8rem", marginBottom: "20px" }}>
            Welcome to <span style={{ color: "#38BDF8" }}>Maishfar Student System</span>
          </h1>
          <p style={{ fontSize: "1.2rem", lineHeight: "1.8" }}>
            Manage all your students’ information in one smart, simple, and secure system.
            Easily <strong>add, view, update, and delete</strong> student details anytime.
          </p>

          {/* Buttons Container */}
          <div style={{ marginTop: "25px", display: "flex", gap: "15px", justifyContent: "center" }}>
            <button
              onClick={() => (window.location.href = "/students")}
              style={{
                padding: "12px 25px",
                backgroundColor: "#38BDF8",
                border: "none",
                borderRadius: "8px",
                color: "white",
                fontSize: "1rem",
                cursor: "pointer",
                transition: "all 0.3s",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#275ae7ff")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#38BDF8")}
            >
              View Students
            </button>

            <button
              onClick={() => (window.location.href = "/login")}
              style={{
                padding: "12px 25px",
                backgroundColor: "#38BDF8",  // navy blue
                border: "none",
                borderRadius: "8px",
                color: "white",
                fontSize: "1rem",
                cursor: "pointer",
                transition: "all 0.3s",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#4169E1" )}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#38BDF8")}
            >
              Login
            </button>
          </div>
        </div>
      </section>

      <footer
        style={{
          background: "#0A1A4F",
          color: "white",
          padding: "20px",
          textAlign: "center",
          marginTop: "20px",
        }}
      >
        <p>
          © {new Date().getFullYear()} Maishfar Student System | All Rights Reserved | Designed by Farida Abdulsalam
        </p>
      </footer>
    </>
  );
}
