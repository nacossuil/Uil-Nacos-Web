import mongoose from "mongoose";

export const connectToDatabase = async (mongoDBUrI) => {
  try {
    await mongoose.connect(mongoDBUrI);
    console.log("Connected to MongoDB successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  }
};
