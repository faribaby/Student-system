"use client";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const linkStyle = {
    color: "white",
    textDecoration: "none",
    cursor: "pointer",
    transition: "color 0.3s ease",
  };

  const hoverColor = "#B0C4FF"; // light blue

  return (
    <nav
      style={{
        background: "#0A1A4F",
        padding: "15px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
      }}
    >
      {/* LOGO + TITLE */}
      <Link href="/" style={{ textDecoration: "none" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Image
            src="/maishfar.png" // your logo file name
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
            }}
            onMouseEnter={(e) => (e.target.style.color = hoverColor)}
            onMouseLeave={(e) => (e.target.style.color = "white")}
          >
            MAISHFAR STUDENT SYSTEM
          </h2>
        </div>
      </Link>

      <div style={{ display: "flex", gap: "20px" }}>
        {/* HOME */}
        <Link
          href="/"
          style={linkStyle}
          onMouseEnter={(e) => (e.target.style.color = hoverColor)}
          onMouseLeave={(e) => (e.target.style.color = "white")}
        >
          Home
        </Link>

        {/* ADD */}
        <Link
          href="/add"
          style={linkStyle}
          onMouseEnter={(e) => (e.target.style.color = hoverColor)}
          onMouseLeave={(e) => (e.target.style.color = "white")}
        >
          Add Student
        </Link>

        {/* VIEW */}
        <Link
          href="/students"
          style={linkStyle}
          onMouseEnter={(e) => (e.target.style.color = hoverColor)}
          onMouseLeave={(e) => (e.target.style.color = "white")}
        >
          View Students
        </Link>

        {/* EDIT */}
        <Link
          href="/edit-page"
          style={linkStyle}
          onMouseEnter={(e) => (e.target.style.color = hoverColor)}
          onMouseLeave={(e) => (e.target.style.color = "white")}
        >
          Edit Student
        </Link>

        {/* DELETE */}
        <Link
          href="/delete"
          style={linkStyle}
          onMouseEnter={(e) => (e.target.style.color = hoverColor)}
          onMouseLeave={(e) => (e.target.style.color = "white")}
        >
          Delete Student
        </Link>

        {/* DASHBOARD */}
        <Link
          href="/dashboard"
          style={linkStyle}
          onMouseEnter={(e) => (e.target.style.color = hoverColor)}
          onMouseLeave={(e) => (e.target.style.color = "white")}
        >
          Dashboard
        </Link>

        {/* LOGOUT BUTTON */}
        <button
          onClick={() => {
            localStorage.removeItem("isLoggedIn");
            window.location.href = "/login";
          }}
          style={{
            background: "red",
            color: "white",
            border: "none",
            padding: "8px 14px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
