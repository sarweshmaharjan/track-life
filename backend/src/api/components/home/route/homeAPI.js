import express from "express";
import homeController from "../controllers/homeController";


const router = express.Router();

/**
 * Routes for Category
 */
router.get("/", homeController.index);
router.get("/under-budget", homeController.getUnderBudget);
router.get("/over-budget", homeController.getOverBudget);

export default router;
