import { Router } from "express";
import { CandyController } from "./candy.controller";

const router = Router();

router.get("/", CandyController.getAll);

//router.get("/:title", ComboController.getByTitle);

router.post("/", CandyController.addCandy);

export default router;