import mongoose from "mongoose";

const connectMongoDB = async () => {
  // Reuse existing connection if already connected
  if (mongoose.connection.readyState === 1) {
    return;
  }

  try {
    if (!process.env.MONGODB_URL) {
      throw new Error("MONGODB_URI is not defined in .env");
    }

    await mongoose.connect(process.env.MONGODB_URL);
    console.log("✅ MongoDB connected");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    throw new Error("Failed to connect to MongoDB");
  }
};

export default connectMongoDB;
