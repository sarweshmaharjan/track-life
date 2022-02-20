import express from "express";
import expensesController from "../controllers/expensesController";

const router = express.Router();

/**
 * Routes for Category
 */
router.get("/", expensesController.index);
router.get("/:expenseId", expensesController.show);
router.post("/", expensesController.store);
router.put("/:expenseId/edit", expensesController.update);
router.delete("/:expenseId/delete", expensesController.destroy);

export default router;
