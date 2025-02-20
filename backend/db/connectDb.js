import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    // console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connection to MongoDB: ", error.message);
    process.exit(1); // 1 is failure, 0 status code is success
  }
};
