import { Router } from "express";
import movie from "./movies.routes";
import user from "./user.routes";


const routes = Router();

routes.use("/movies", movie);
/**
 * @swagger
 * /user:
 *   get:
 *    description: Trae todos los usuarios registrados
 *    responses:
 *     '200':
 *       description: Ok
 */

/**
 * @swagger
 * /user/{email}:
 *   get:
 *    description: Trae un usuario por email
 *    parameters:
 *     - in: path
 *       name: email
 *    responses:
 *     '200':
 *       description: Usuario obtenido correctamente
 */

/**
 * @swagger
 * /user:
 *   post:
 *     description:
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: "body"
 *         in: body
 *         required: true
 *     responses:
 *       '200': 
 *         description: Usuario creado correctamente
 *         content:
 *           application/json:
 *           type: object
 */
routes.use("/user", user);

export default routes;
