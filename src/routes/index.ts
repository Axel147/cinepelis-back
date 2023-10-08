import { Router } from "express";
import movie from "./movies.routes"
import user from "./user.routes"


const routes = Router();

routes.use("/movies", movie);
routes.use("/user", user);

export default routes;