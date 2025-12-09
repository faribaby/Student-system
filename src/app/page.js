"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";

export default function Home() {
  const router = useRouter();

  // PROTECTION LOGIC
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      router.push("/login"); // redirect to login if not logged in
    }
  }, [router]);

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
                fontSize: "1.2rem",
                cursor: "pointer",
                transition: "all 0.3s",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#275ae7ff")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#38BDF8")}
            >
              View Students
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
