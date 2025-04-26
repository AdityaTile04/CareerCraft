import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
const PORT = 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.listen(PORT, () => {
  console.log(`Server rinning on port ${PORT}`);
});
