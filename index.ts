import express from "express";
import bodyParser from 'body-parser';
import { PORT, MONGODB_URI } from "./src/config";
import routes from './src/routes/index';
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const cors = require('cors');

const app = express()

app.use(cors());
app.use(bodyParser.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/', routes);


mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB Atlas');
  app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}/`)
  })
})
.catch((error) => {
  console.error('Error connecting to MongoDB Atlas:', error);
});
