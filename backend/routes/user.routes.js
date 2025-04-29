import express from "express";
import { logout, register, signup } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/register", register);
router.post("/signup", signup);
router.post("/logout", logout);

export default router;
