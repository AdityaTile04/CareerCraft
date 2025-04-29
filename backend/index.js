import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./utils/db.js";

import userRoutes from "./routes/user.routes.js";

dotenv.config();
const PORT = process.env.PORT || 3001;

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ message: "Server is running" });
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/", userRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server rinning on port ${PORT}`);
});
