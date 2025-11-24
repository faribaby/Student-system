"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import axios from "axios";

export default function EditStudentPage() {
  const router = useRouter();
  const { id } = useParams();

  const [formData, setFormData] = useState({ name: "", email: "", course: "", age: "" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    async function loadStudent() {
      try {
        const res = await axios.get(`/api/students/${id}`);
        setFormData(res.data.student);
      } catch (e) {
        console.error(e);
        alert("Error loading student");
      } finally {
        setLoading(false);
      }
    }

    loadStudent();
  }, [id]);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await axios.put(`/api/students/${id}`, formData);
      alert("Student updated!");
      router.push("/students");
    } catch (e) {
      console.error(e);
      alert("Update failed");
    }
  }

  if (loading) return <p>Loading student...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Edit Student</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
        <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        <input name="course" placeholder="Course" value={formData.course} onChange={handleChange} />
        <input name="age" placeholder="Age" value={formData.age} onChange={handleChange} />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}
