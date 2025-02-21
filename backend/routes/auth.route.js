import express from "express";

const router = express.Router();

router.post("/signUp");
router.post("/login");
router.post("/logout");

router.post("/verify-email");
router.post("/forgot-password");

router.post("/reset-password/:token");

export default router;
