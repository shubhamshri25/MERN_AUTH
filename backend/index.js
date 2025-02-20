import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";
import { connectDb } from "./db/connectDb.js";
import authRoutes from "./routes/auth.route.js";
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from backend");
});

app.use("/api/auth", authRoutes);

app.listen(port, () => {
  connectDb();
  console.log(`Server is running on port ${port}`);
});
