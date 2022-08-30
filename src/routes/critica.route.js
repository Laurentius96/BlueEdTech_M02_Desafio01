const controllerCriticas = require('../controllers/critica.controller');
const express = require('express');
const route = express.Router();
//const route = require('express').Router();

const {
  validId,
  validObjectBody,
} = require('../middlewares/critica.middleware');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');

route.use('/api-docs', swaggerUi.serve);

route.get('/api-docs', swaggerUi.setup(swaggerDocument));

route.get('/all-criticas', controllerCriticas.findAllCriticasController);

route.get(
  '/one-critica/:id',
  validId,
  controllerCriticas.findByIdCriticaController,
);

route.post(
  '/create-critica',
  validObjectBody,
  controllerCriticas.createCriticaController,
);

route.put(
  '/update-critica/:id',
  validId,
  validObjectBody,
  controllerCriticas.updateCriticaController,
);

route.delete(
  '/delete-critica/:id',
  validId,
  controllerCriticas.deleteCriticaController,
);

module.exports = route;
