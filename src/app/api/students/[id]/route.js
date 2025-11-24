import connectMongoDB from "@/lib/mongodb";
import Student from "@/models/student";
import { NextResponse } from "next/server";

// GET single student
export async function GET(req, context) {
  const params = await context.params; // ✅ unwrap the promise
  await connectMongoDB();

  const student = await Student.findById(params.id);
  if (!student) {
    return NextResponse.json({ message: "Student not found" }, { status: 404 });
  }

  return NextResponse.json({ student });
}

// PUT - Update student
export async function PUT(req, context) {
  const params = await context.params;
  const data = await req.json();
  await connectMongoDB();

  const updated = await Student.findByIdAndUpdate(params.id, data, { new: true });
  if (!updated) {
    return NextResponse.json({ message: "Student not found" }, { status: 404 });
  }

  return NextResponse.json({ message: "Updated successfully", student: updated });
}

// DELETE student
export async function DELETE(req, context) {
  const params = await context.params;
  await connectMongoDB();

  const deleted = await Student.findByIdAndDelete(params.id);
  if (!deleted) {
    return NextResponse.json({ message: "Student not found" }, { status: 404 });
  }

  return NextResponse.json({ message: "Deleted successfully" });
}
