import express from "express";
import bodyParser from "body-parser";
import {swaggerOptions} from './swaggerOptions';

const cors = require("cors");
const app = express();
const router = express.Router();
const port = process.env.PORT || 3000;

const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");
const http = require('http');
const swaggerDocs = swaggerJsdoc(swaggerOptions);
const server = http.createServer(app);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use("/api", router);
app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(port, () => {
  console.log(`Corriendo en http://localhost:${port}`)
})