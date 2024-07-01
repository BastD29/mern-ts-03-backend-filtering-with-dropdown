import mongoose from "mongoose";
import config from "./config";
const { mongoUri } = config;

const connectDB = async (): Promise<void> => {
  try {
    if (!mongoUri) {
      throw new Error("mongoUri is not defined in the environment variables");
    }

    const conn = await mongoose.connect(mongoUri);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default connectDB;
