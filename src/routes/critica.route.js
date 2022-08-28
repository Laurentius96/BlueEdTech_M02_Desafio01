const route = require('express').Router();
const criticasController = require('../controllers/critica.controller');
const { validId, validObjectBody } = require('../middlewares/critica.middleware');


route.get('/all-criticas', controllerCriticas.findAllCriticasController);
route.get('/one-critica/:id', validId, controllerCriticas.findByIdCriticaController);
route.post('/create-critica', validObjectBody, controllerCriticas.createCriticaController);
route.put('/update-critica/:id',validId, validObjectBody,  controllerCriticas.updateCriticaController);
route.delete('/delete-critica/:id', validId, controllerCriticas.deleteCriticaController);

module.exports = router;
