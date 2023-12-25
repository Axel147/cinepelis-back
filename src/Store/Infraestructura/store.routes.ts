import { Router } from "express";
import { StoreController } from "./store.controller";

const router = Router();

router.get("/", StoreController.getAll);

//router.get("/:title", ComboController.getByTitle);

router.post("/", StoreController.addStore);

export default router;