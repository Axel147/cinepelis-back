import express from "express";
import bodyParser from "body-parser";
import routes from "./src/indexRoutes";
import { PORT, MONGODB_URI } from "./src/config";
import {swaggerOptions} from './swaggerOptions';

const mongoose = require("mongoose");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");
const cors = require("cors");
const http = require('http');
const app = express();
const swaggerDocs = swaggerJsdoc(swaggerOptions);
const server = http.createServer(app);

app.use(cors());
app.use(bodyParser.json());
app.use("/", routes);
app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB Atlas");
    server.listen(3001, () => {
      const { port } = server.address();
      console.log(`Server running on port http://localhost:${3001 || port}/`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB Atlas:", error);
  }
);





