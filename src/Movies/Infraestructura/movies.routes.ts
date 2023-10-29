import { Router } from "express";
import { MovieController } from "./movies.controller";

const router = Router();

router.get("/", MovieController.getAll);

router.post("/", MovieController.addMovie);

export default router;