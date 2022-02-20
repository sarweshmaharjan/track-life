import express from "express";
import incomeController from "../controllers/incomeController";

const router = express.Router();

/**
 * Routes for Transaction
 */
router.get("/", incomeController.index);
router.get("/:incomeId/show", incomeController.show);
router.get("/permanent-deductible", incomeController.indexPermanentDeductible);
router.post("/", incomeController.store);
router.post("/permanent-deductible", incomeController.storePermanentDeductible);
router.put("/:transactionId/edit", incomeController.update);
router.put(
  "/permanent-deductible/:permanentDeductibleId/edit",
  incomeController.updatePermanentDeductible
);
router.delete("/:transactionId/delete", incomeController.destroy);
router.delete(
  "/permanent-deductible/:permanentDeductibleId/delete",
  incomeController.destroyPermanentDeductible
);

export default router;
