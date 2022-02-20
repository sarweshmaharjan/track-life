import express from "express";
import userController from "../controllers/userController";

const router = express.Router();

/**
 * Routes for Category
 */
router.get("/:userId/show", userController.show);
router.post("/:userId/check-old-password", userController.checkOldPassword);
router.post("/:userId/change-password", userController.changePassword);
router.put("/:userId/edit", userController.update);
router.delete("/:userId/delete", userController.destroy);

export default router;
