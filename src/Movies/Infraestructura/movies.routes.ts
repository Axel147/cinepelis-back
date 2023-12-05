import { Router } from "express";
import { MovieController } from "./movies.controller";

const router = Router();

router.get("/", MovieController.getAll);
//falta get por id
router.get("/:id", MovieController.getById);

router.post("/", MovieController.addMovie);
//falta put por id
router.put("/:id", MovieController.updateMovie);

router.delete("/:id", MovieController.deleteMovie);

export default router;