"use client";
import { useState } from "react";
import axios from "axios";
import Navbar from "@/components/Navbar";

export default function AddStudent() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    course: "",
    age: "",
  });
  const [loading, setIsLoading]= useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await axios.post("/api/students", { ...form, age: Number(form.age) });
      alert("Student added successfully!");
      setForm({ name: "", email: "", course: "", age: "" });
    } catch (err) {
      console.error("Full error object:", err);

      const message =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        "Unknown error";

      alert(`Failed to add student: ${message}`);
    }
    setIsLoading(false);
  };

  return (
    <>
      <Navbar />
      <div style={{ maxWidth: 500, margin: "40px auto", padding: 20 }}>
        <h2 style={{ marginBottom: 20 }}>Add New Student</h2>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <input
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
          <input
            placeholder="Course"
            value={form.course}
            onChange={(e) => setForm({ ...form, course: e.target.value })}
            required
          />
          <input
            type="number"
            placeholder="Age"
            value={form.age}
            onChange={(e) => setForm({ ...form, age: e.target.value })}
            required
          />
          <button
            type="submit"
            disabled={loading}
            style={{
              marginTop: 15,
              padding: 10,
              backgroundColor: "black",
              color: "white",
              border: "none",
              cursor: "pointer",
              
            }}
            
          >
            {loading? "is Loading ..": "Add Student"}
          </button>
        </form>
      </div>
    </>
  );
}
