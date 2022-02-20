import express from "express";
import reportController from "../controllers/reportController";


const router = express.Router();

/**
 * Routes for Report
 */
router.get("/", reportController.index);

export default router;
