import express from "express";
import shopListController from "../controllers/shopListController";

const router = express.Router();

/**
 * Routes for Shop Lists
 */
router.get("/", shopListController.index);
router.get("/:shopListId/show", shopListController.show);
router.post("/", shopListController.store);
router.post("/:shopListId/purchase", shopListController.purchase);
router.put("/:shopListId/edit", shopListController.update);
router.delete("/:shopListId/delete", shopListController.destroy);

export default router;
