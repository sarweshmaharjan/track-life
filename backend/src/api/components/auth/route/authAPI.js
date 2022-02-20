import express from "express";
import { GENERAL } from "../../../config/config";
import authController from "../controllers/authController";
// import validate from "../../../middleware/requests";

const router = express.Router();

/**
 * Check if JWT private key is present or not.
 * @type {string} - JWT private key
 */
if (!GENERAL.JWT_PRIVATE_KEY) {
  console.log("Please set JWT Private Key...");
  process.exit(1);
}

/**
 * Routes for Authenticated user
 */
router.post("/sign-up", authController.register);
router.post("/sign-in", authController.login);
router.post("/forget-password", authController.forgetPassword);
router.post("/reset-password", authController.resetPassword);
router.post("/refreshToken", authController.refreshToken);

export default router;
