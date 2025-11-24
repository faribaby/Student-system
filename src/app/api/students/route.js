import connectMongoDB from "@/lib/mongodb";
import Student from "@/models/student";
import { NextResponse } from "next/server";

// GET all students
export async function GET() {
  try {
    await connectMongoDB();
    const students = await Student.find();
    return NextResponse.json({ students });
  } catch (error) {
    console.error("❌ Error fetching students:", error);
    return NextResponse.json(
      { message: "Internal Server Error", error: error.message },
      { status: 500 }
    );
  }
}

// POST - Create a new student
export async function POST(req) {
  try {
    const { name, email, course, age } = await req.json();

    if (!name || !email || !course || !age) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    await connectMongoDB();
    const student = await Student.create({ name, email, course, age });

    return NextResponse.json(
      { message: "Student added successfully", student },
      { status: 201 }
    );
  } catch (error) {
    console.error("❌ Error adding student:", error);
    return NextResponse.json(
      { message: "Internal Server Error", error: error.message },
      { status: 500 }
    );
  }
}
