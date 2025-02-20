import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";
import { connectDb } from "./db/connectDb.js";

const app = express();

dotenv.config();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  connectDb();
  console.log(`Server is running on port ${port}`);
});
