import mongoose from "mongoose";
import { DB_URI,NODE_ENV } from "../config/env.js";
if(!DB_URI) {
  throw new Error("DB_URI is not defined in environment variables");
}  
const connectTODatabase = async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log(`MongoDB connected in ${NODE_ENV} mode`);
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
}
export default connectTODatabase;