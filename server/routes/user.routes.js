import express from "express";
import { registerValidator } from "../validators/user.validators.js";
import { validate } from "../middlewares/validate.middleware.js";
import { register } from "../controllers/user.controller.js";
const router = express.Router();
router.post("/register", validate(registerValidator), register);
export default router;
