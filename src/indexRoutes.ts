import { Router } from "express";
import combo from "./Combos/Infraestructura/combo.routes"
import movie from "./Movies/Infraestructura/movies.routes";
import user from "./User/Infraestructura/user.routes";

const routes = Router();

//---------------MOVIES-----------------------------------
/**
* @swagger
* /movies:
*   get:
*    tags: [Movies]
*    description: Trae todas las peliculas registradas
*    responses:
*     '200':
*       description: Ok
*/

routes.use("/combos", combo);

/**
 * @swagger
 * /movies:
 *   post:
 *     tags: [Movies]
 *     description: Registrar una pelicula
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: "body"
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           properties: {
 *             titulo: {
 *               type: string,
 *               description: La Monja
 *             },
 *             descripcion: {
 *               type: string,
 *               description: Una pelicula de terror que no da tanto terror pero podria dar más terror si tuviera algo de terror
 *             },
 *             portada: {
 *               type: string,
 *               description: https://2.bp.blogspot.com/-qeQ2Kz17suc/W5otZQLcDlI/AAAAAAAAVmI/S8CTqeWDBGkJoDBI9KFIM_mLdXfoJDSxACLcBGAs/s0000/la-monja-poster.jpg
 *             },
 *             trailer: {
 *               type: string,
 *               description: Link del video promocional
 *             },
 *             clasificacion: {
 *               type: string,
 *               description: +15
 *             },
 *             genero: {
 *               type: string,
 *               description: femenino
 *             },
 *             duracion: {
 *               type: string,
 *               description: 120 minutos
 *             },
 *             elenco: {
 *               type: string,
 *               description: Un elenco cualquiera porque parece que cualquiera puede ser monja y frances
 *             },
 *             director: {
 *               type: string,
 *               description: Un director de aquellos porque le hiria mejor como panadero que como director
 *             }
 *           }
 *     responses:
 *       '200': 
 *         description: Pelicula creada correctamente
 *         content:
 *           application/json:
 *           type: object
 */

routes.use("/movies", movie);

//-------------USER----------------------------

/**
 * @swagger
 * tags: User
 * /user:
 *   get:
 *    tags: [User]
 *    summary: Trae todos los usuarios
 *    description: Trae todos los usuarios registrados
 *    responses:
 *     '200':
 *       description: Ok
 */

/**
 * @swagger
 * /user/{email}:
 *   get:
 *    tags: [User]
 *    summary: Trae un usuario por email
 *    description: Trae un usuario por email
 *    parameters:
 *     - in: path
 *       name: email
 *    responses:
 *     '200':
 *       description: Usuario obtenido correctamente
 *     '404':
 *       description: Usuario no encontrado
 */

/**
 * @swagger
 * /user:
 *   post:
 *     tags: [User]
 *     summary: Registra un usuario
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
