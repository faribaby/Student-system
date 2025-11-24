"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

export default function StudentDashboard() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  // Fetch all students
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

  useEffect(() => {
    fetchStudents();
  }, []);

  if (loading) return <p style={{ textAlign: "center" }}>Loading dashboard...</p>;

  // Derived statistics
  const totalStudents = students.length;
  const avgAge = students.length
    ? (students.reduce((acc, s) => acc + s.age, 0) / students.length).toFixed(1)
    : 0;

  const totalCourses = [...new Set(students.map((s) => s.course))].length;

  // Students per course for chart
  const studentsPerCourse = [...students.reduce((map, s) => {
    map.set(s.course, (map.get(s.course) || 0) + 1);
    return map;
  }, new Map())].map(([course, count]) => ({ course, count }));

  // Filtered students
  const filteredStudents = students.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase()) ||
    s.course.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>Student Dashboard</h1>

      {/* Summary Cards */}
      <div style={{ display: "flex", gap: "1rem", marginBottom: "2rem" }}>
        <div style={cardStyle}>
          <h3>Total Students</h3>
          <p>{totalStudents}</p>
        </div>
        <div style={cardStyle}>
          <h3>Average Age</h3>
          <p>{avgAge}</p>
        </div>
        <div style={cardStyle}>
          <h3>Total Courses</h3>
          <p>{totalCourses}</p>
        </div>
      </div>

      {/* Chart */}
      <div style={{ width: "100%", height: 300, marginBottom: "2rem" }}>
        <ResponsiveContainer>
          <BarChart data={studentsPerCourse}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="course" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Bar dataKey="count" fill="#0A1A4F" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search by name or course..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ width: "100%", padding: "10px", marginBottom: "1.5rem", borderRadius: "5px" }}
      />

      {/* Students Table */}
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ backgroundColor: "#0A1A4F", color: "#fff" }}>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Email</th>
            <th style={thStyle}>Course</th>
            <th style={thStyle}>Age</th>
            <th style={thStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((student) => (
            <tr key={student._id} style={{ textAlign: "center", borderBottom: "1px solid #ccc" }}>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.course}</td>
              <td>{student.age}</td>
              <td>
                <a href={`/edit?id=${student._id}`} style={actionButtonStyle("blue")}>Edit</a>
                <a href={`/delete?id=${student._id}`} style={actionButtonStyle("red")}>Delete</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// --- Styles ---
const cardStyle = {
  flex: 1,
  padding: "1rem",
  borderRadius: "8px",
  backgroundColor: "#f5f5f5",
  textAlign: "center",
  boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
};

const thStyle = { padding: "10px", textAlign: "center" };

const actionButtonStyle = (color) => ({
  display: "inline-block",
  margin: "0 5px",
  padding: "5px 10px",
  backgroundColor: color,
  color: "#fff",
  borderRadius: "5px",
  textDecoration: "none",
});
