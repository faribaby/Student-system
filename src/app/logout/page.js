"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Logout() {
  const router = useRouter();
  const [showModal, setShowModal] = useState(true);
  const [loggingOut, setLoggingOut] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleLogout = () => {
    setLoggingOut(true);

    // Simulate a smooth animation delay
    setTimeout(() => {
      // Clear login storage
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("adminEmail");
      localStorage.removeItem("adminPassword");

      // Show success message
      setSuccess(true);

      // Redirect after 1.5s
      setTimeout(() => {
        router.push("/login");
      }, 1500);
    }, 1000);
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f4ff",
        padding: "20px",
      }}
    >
      {/* Success Message */}
      {success && (
        <div
          style={{
            padding: "30px 40px",
            background: "#0a3b88",
            color: "white",
            borderRadius: "10px",
            fontSize: "20px",
            textAlign: "center",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            animation: "fadeIn 0.6s ease",
          }}
        >
          Logged out successfully ✓  
          <div style={{ fontSize: "14px", marginTop: "10px" }}>
            Redirecting to login...
          </div>
        </div>
      )}

      {/* Modal */}
      {!success && showModal && (
        <div
          style={{
            background: "white",
            width: "90%",
            maxWidth: "400px",
            padding: "30px",
            borderRadius: "12px",
            textAlign: "center",
            boxShadow: "0 5px 20px rgba(0,0,0,0.15)",
            animation: "slideUp 0.5s ease",
          }}
        >
          <h2 style={{ color: "#0a3b88", marginBottom: "10px" }}>
            Confirm Logout
          </h2>
          <p style={{ marginBottom: "25px" }}>
            Are you sure you want to logout?
          </p>

          <button
            onClick={handleLogout}
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: loggingOut ? "#0a3b88aa" : "#0a3b88",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "16px",
              transition: "0.3s",
            }}
            disabled={loggingOut}
          >
            {loggingOut ? "Logging out..." : "Yes, Logout"}
          </button>
        </div>
      )}

      {/* Animations */}
      <style jsx>{`
        @keyframes slideUp {
          0% { transform: translateY(40px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }

        @keyframes fadeIn {
          0% { opacity: 0; transform: scale(0.95); }
          100% { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
