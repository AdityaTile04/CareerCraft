import express from "express";
import {
  getCompany,
  getCompanyById,
  registerCompany,
  updateComapny,
} from "../controllers/company.controller.js";
import { isAuthenticated } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/register", isAuthenticated, registerCompany);
router.get("/get", isAuthenticated, getCompany);
router.get("/get/:id", isAuthenticated, getCompanyById);
router.put("/update/:id", isAuthenticated, updateComapny);

export default router;
