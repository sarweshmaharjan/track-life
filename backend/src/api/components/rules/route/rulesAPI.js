import express from "express";
import rulesController from "../controllers/rulesController";

const router = express.Router();

/**
 * Routes for Rules
 */
router.get("/", rulesController.index);
router.post("/", rulesController.store);
router.put("/:ruleId/edit", rulesController.update);

export default router;
