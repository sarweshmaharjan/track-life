import express from "express";
import categoryController from "../controllers/categoryController";

const router = express.Router();

/**
 * Routes for Category
 */
router.get("/", categoryController.index);
router.post("/", categoryController.store);
router.put("/:categoryId/edit", categoryController.update);
router.delete("/:categoryId/delete", categoryController.destroy);

export default router;
