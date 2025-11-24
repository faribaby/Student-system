"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function DeleteStudentPage() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch students
  const fetchStudents = async () => {
    try {
      const res = await axios.get("/api/students");
      setStudents(res.data.students);
    } catch (err) {
      console.error("Error fetching students:", err.response?.data || err.message);
      alert("Failed to fetch students. Check console for details.");
    } finally {
      setLoading(false);
    }
  };

  // Delete student
  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this student?")) return;

    try {
      await axios.delete(`/api/students/${id}`); // ✅ Updated to new API
      alert("Student deleted successfully!");

      // Update local state
      setStudents(students.filter((s) => s._id !== id));
    } catch (err) {
      console.error("Error deleting student:", err.response?.data || err.message);
      alert("Failed to delete student. Check console for details.");
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  if (loading) return <p style={{ textAlign: "center" }}>Loading students...</p>;

  if (students.length === 0)
    return <p style={{ textAlign: "center" }}>No students found.</p>;

  return (
    <div style={{ maxWidth: "800px", margin: "2rem auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
        Delete Student Records
      </h1>

      <div style={{ display: "grid", gap: "1.5rem" }}>
        {students.map((student) => (
          <div
            key={student._id}
            style={{
              padding: "1rem",
              border: "1px solid #ccc",
              borderRadius: "8px",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            }}
          >
            <h2>{student.name}</h2>
            <p><strong>Email:</strong> {student.email}</p>
            <p><strong>Course:</strong> {student.course}</p>
            <p><strong>Age:</strong> {student.age}</p>

            <button
              onClick={() => handleDelete(student._id)}
              style={{
                backgroundColor: "red",
                color: "white",
                padding: "0.5rem 1rem",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                marginTop: "0.5rem",
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
