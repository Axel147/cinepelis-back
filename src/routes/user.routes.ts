import { Router } from "express";
import { UserController } from "../controllers/user.controller";

const router = Router();
/**
 * @swagger
 * /:
 *   get:
 *    description: Trae todos los usuarios registrados
 *    responses:
 *     '200':
 *     description: Ok
 */
router.get("/", UserController.getAll);

router.post("/", UserController.createUser);

export default router;
