"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    cursor: "pointer",
    transition: "color 0.3s ease",
    whiteSpace: "nowrap",
    flexShrink: 1,
  };

  const hoverColor = "#B0C4FF"; // light blue

  return (
    <nav
      style={{
        background: "#0A1A4F",
        padding: "12px 16px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
        position: "relative",
      }}
    >
      {/* LOGO + TITLE */}
      <Link href="/" style={{ textDecoration: "none", flexShrink: 1 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            whiteSpace: "nowrap",
          }}
        >
          <Image
            src="/maishfar.png"
            alt="Logo"
            width={40}
            height={40}
            style={{ borderRadius: "6px" }}
          />

          <h2
            style={{
              margin: 0,
              color: "white",
              cursor: "pointer",
              transition: "color 0.3s ease",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => (e.target.style.color = hoverColor)}
            onMouseLeave={(e) => (e.target.style.color = "white")}
          >
            MAISHFAR STUDENT SYSTEM
          </h2>
        </div>
      </Link>

      {/* HAMBURGER BUTTON (MOBILE ONLY) */}
      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          display: "none",
          flexDirection: "column",
          gap: "5px",
          cursor: "pointer",
        }}
      >
        <span style={{ width: "25px", height: "3px", background: "white" }}></span>
        <span style={{ width: "25px", height: "3px", background: "white" }}></span>
        <span style={{ width: "25px", height: "3px", background: "white" }}></span>
      </div>

      {/* NAV LINKS (DESKTOP) */}
      <div
        className="nav-links"
        style={{
          display: "flex",
          gap: "12px",
          alignItems: "center",
          whiteSpace: "nowrap",
        }}
      >
        <Link
          href="/"
          style={linkStyle}
          onMouseEnter={(e) => (e.target.style.color = hoverColor)}
          onMouseLeave={(e) => (e.target.style.color = "white")}
        >
          Home
        </Link>

        <Link
          href="/add"
          style={linkStyle}
          onMouseEnter={(e) => (e.target.style.color = hoverColor)}
          onMouseLeave={(e) => (e.target.style.color = "white")}
        >
          Add Student
        </Link>

        <Link
          href="/students"
          style={linkStyle}
          onMouseEnter={(e) => (e.target.style.color = hoverColor)}
          onMouseLeave={(e) => (e.target.style.color = "white")}
        >
          View Students
        </Link>

        <Link
          href="/edit-page"
          style={linkStyle}
          onMouseEnter={(e) => (e.target.style.color = hoverColor)}
          onMouseLeave={(e) => (e.target.style.color = "white")}
        >
          Edit Student
        </Link>

        <Link
          href="/delete"
          style={linkStyle}
          onMouseEnter={(e) => (e.target.style.color = hoverColor)}
          onMouseLeave={(e) => (e.target.style.color = "white")}
        >
          Delete Student
        </Link>

        <Link
          href="/dashboard"
          style={linkStyle}
          onMouseEnter={(e) => (e.target.style.color = hoverColor)}
          onMouseLeave={(e) => (e.target.style.color = "white")}
        >
          Dashboard
        </Link>

        <Link href="/login">
          <button
            style={{
              background: "#1E90FF",
              color: "white",
              border: "none",
              padding: "6px 12px",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "14px",
              whiteSpace: "nowrap",
              flexShrink: 1,
            }}
          >
            Login
          </button>
        </Link>

        <button
          onClick={() => {
            localStorage.removeItem("isLoggedIn");
            window.location.href = "/logout";
          }}
          style={{
            background: "red",
            color: "white",
            border: "none",
            padding: "6px 12px",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "14px",
            whiteSpace: "nowrap",
            flexShrink: 1,
          }}
        >
          Logout
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {menuOpen && (
        <div
          className="mobile-menu"
          style={{
            position: "absolute",
            top: "70px",
            right: "0",
            background: "#0A1A4F",
            width: "100%",
            padding: "15px",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          <Link href="/" style={linkStyle}>Home</Link>
          <Link href="/add" style={linkStyle}>Add Student</Link>
          <Link href="/students" style={linkStyle}>View Students</Link>
          <Link href="/edit-page" style={linkStyle}>Edit Student</Link>
          <Link href="/delete" style={linkStyle}>Delete Student</Link>
          <Link href="/dashboard" style={linkStyle}>Dashboard</Link>

          <Link href="/login">
            <button
              style={{
                background: "#1E90FF",
                color: "white",
                border: "none",
                padding: "8px",
                borderRadius: "5px",
              }}
            >
              Login
            </button>
          </Link>

          <button
            onClick={() => {
              localStorage.removeItem("isLoggedIn");
              window.location.href = "/logout";
            }}
            style={{
              background: "red",
              color: "white",
              border: "none",
              padding: "8px",
              borderRadius: "5px",
            }}
          >
            Logout
          </button>
        </div>
      )}

      {/* RESPONSIVE CSS */}
      <style jsx>{`
        @media (max-width: 768px) {
          .nav-links {
            display: none !important;
          }

          .hamburger {
            display: flex !important;
          }
        }
      `}</style>
    </nav>
  );
}
