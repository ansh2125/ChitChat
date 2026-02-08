import express from "express";
const router = express.Router();
router.post("/register", validate(registerValidator), register);

export default router;