import { Router } from "express";
import movie from "./movies.routes"

const routes = Router();

routes.use("/movies", movie);

export default routes;