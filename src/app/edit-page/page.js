"use client";

import { useState } from "react";

export default function EditPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
    age: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    try {
      const res = await fetch("/api/edit-page", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        alert(data.message || "Edit saved successfully!");
        // Optionally, reset form
        // setFormData({ name: "", email: "", course: "", age: "" });
      } else {
        alert(data.message || "Something went wrong!");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("Error submitting form");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Edit</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <br />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <br />
        <input
          type="text"
          name="course"
          value={formData.course}
          onChange={handleChange}
          placeholder="Course"
        />
        <br />
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          placeholder="Age"
        />
        <br />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
