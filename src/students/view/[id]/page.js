"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import Navbar from "@/components/Navbar";
import Image from "next/image"; // ✅ Import Next.js Image

export default function ViewStudent() {
  const { id } = useParams(); // Get student ID from URL
  const [student, setStudent] = useState(null);

  // Load student by ID
  const loadStudent = async () => {
    try {
      const res = await axios.get("/api/students"); // Fetch all students
      const s = res.data.students.find((stu) => stu._id === id);
      setStudent(s);
    } catch (err) {
      console.error("Error loading student:", err);
    }
  };

  useEffect(() => {
    loadStudents();
  }, []);

  if (!student) return <p>Loading...</p>;

  return (
    <>
      <Navbar />
      <div style={{ padding: "20px", maxWidth: "600px", margin: "40px auto" }}>
        <h2>Student Details</h2>
        <div style={{ marginBottom: "10px" }}>
          <strong>Name:</strong> {student.name}
        </div>
        <div style={{ marginBottom: "10px" }}>
          <strong>Email:</strong> {student.email}
        </div>
        <div style={{ marginBottom: "10px" }}>
          <strong>Course:</strong> {student.course}
        </div>
        <div style={{ marginBottom: "10px" }}>
          <strong>Age:</strong> {student.age}
        </div>

        {/* Optimized Image */}
        {student.photo && (
          <Image
            src={student.photo}
            alt="Student Photo"
            width={150}
            height={150}
            style={{ borderRadius: "8px", marginTop: "10px" }}
            priority={true} // ⚡ Preload for faster LCP
          />
        )}

        <div style={{ marginTop: "20px" }}>
          <button
            onClick={() => (window.location.href = "/students")}
            style={{
              padding: "10px 20px",
              borderRadius: "5px",
              border: "none",
              backgroundColor: "#007bff",
              color: "white",
              cursor: "pointer",
            }}
          >
            Back to Students
          </button>
        </div>
      </div>
    </>
  );
}
