import express from "express";
import { isAuthenticated } from "../middleware/auth.middleware.js";
import {
  getAdminJobs,
  getAllJobs,
  getJobById,
  postJob,
} from "../controllers/job.controller.js";

const router = express.Router();

router.post("/post", isAuthenticated, postJob);
router.get("/get", isAuthenticated, getAllJobs);
router.get("/get/:id", isAuthenticated, getJobById);
router.get("/getadmin", isAuthenticated, getAdminJobs);

export default router;
