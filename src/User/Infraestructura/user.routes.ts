import { Router } from "express";
import { UserController } from "./user.controller";

const router = Router();

router.get("/", UserController.getAll);
router.get("/:email", UserController.getUserByEmail);

router.post("/", UserController.createUser);

export default router;
