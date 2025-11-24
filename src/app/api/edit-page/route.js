import connectMongoDB from "@/lib/mongodb";
import Student from "@/models/student";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectMongoDB(); // connect to MongoDB
    const data = await req.json();

    // For demo: let's update a specific student (e.g., first student)
    // You can change this logic to update admin profile or a default record
    const student = await Student.findOne(); // get first student

    if (!student) {
      return NextResponse.json({ message: "No student found to update" }, { status: 404 });
    }

    // Update the student fields with submitted data
    student.name = data.name || student.name;
    student.email = data.email || student.email;
    student.course = data.course || student.course;
    student.age = data.age || student.age;

    await student.save();

    return NextResponse.json({ message: "Edit saved successfully!" });
  } catch (err) {
    console.error("Error in API:", err);
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}
