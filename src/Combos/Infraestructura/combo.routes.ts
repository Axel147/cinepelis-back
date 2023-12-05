import { Router } from "express";
import { ComboController } from "./combo.controller";

const router = Router();

router.get("/", ComboController.getAll);

//router.get("/:title", ComboController.getByTitle);

router.post("/", ComboController.addCombo);

export default router;