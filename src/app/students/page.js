"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "@/components/Navbar";

export default function StudentsPage() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  // 🟢 Load all students
  const loadStudents = async () => {
    try {
      const res = await axios.get("/api/students");
      setStudents(res.data.students || []);
    } catch (err) {
      console.error("Error loading students:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadStudents();
  }, []);

  // 🟠 Filter students by search
  const filteredStudents = students.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.email.toLowerCase().includes(search.toLowerCase()) ||
      s.course.toLowerCase().includes(search.toLowerCase())
  );

  // 🔴 Delete student
  const deleteStudent = async (id) => {
    if (!window.confirm("Are you sure you want to delete this student?")) return;

    try {
      await axios.delete(`/api/students/${id}`);
      // Update state immediately
      setStudents(students.filter((s) => s._id !== id));
      alert("Student deleted successfully!");
    } catch (err) {
      console.error("Error deleting student:", err.response?.data || err.message);
      alert("Failed to delete student. Check console for details.");
    }
  };

  if (loading) return <p style={{ textAlign: "center" }}>Loading students...</p>;

  if (students.length === 0)
    return <p style={{ textAlign: "center" }}>No students found.</p>;

  return (
    <>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <h2>All Students</h2>

        {/* Search input */}
        <input
          type="text"
          placeholder="Search by name, email or course..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            marginBottom: "15px",
            padding: "10px",
            width: "300px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />

        {/* Students table */}
        <table
          border="1"
          width="100%"
          cellPadding="10"
          style={{ borderCollapse: "collapse" }}
        >
          <thead style={{ backgroundColor: "#f3f3f3" }}>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Course</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredStudents.map((s) => (
              <tr key={s._id}>
                <td>{s.name}</td>
                <td>{s.email}</td>
                <td>{s.course}</td>
                <td>{s.age}</td>
                <td>
                  <button
                    onClick={() => (window.location.href = `/edit/${s._id}`)}
                    style={{ marginRight: "10px" }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteStudent(s._id)}
                    style={{ backgroundColor: "red", color: "white", padding: "5px 10px", border: "none", borderRadius: "4px", cursor: "pointer" }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
