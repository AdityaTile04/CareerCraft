import express from "express";
import {
  login,
  logout,
  register,
  updateProfile,
} from "../controllers/user.controller.js";
import { isAuthenticated } from "../middleware/auth.middleware.js";
import { singleUpload } from "../middleware/multer.js";

const router = express.Router();

router.post("/register", singleUpload, register);
router.post("/login", login);
<<<<<<< HEAD
router.get("/logout", logout);
router.post("/profile/update", isAuthenticated, singleUpload, updateProfile);
=======
router.post("/profile/update", isAuthenticated, updateProfile);
>>>>>>> parent of 8c6fda4 (add profile dialog to update user profile)

export default router;
