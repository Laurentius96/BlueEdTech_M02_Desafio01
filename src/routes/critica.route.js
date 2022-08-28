const router = require('express').Router();
const criticasController = require('../controllers/critica.controller');
const { validId, validObjectBody } = require('../middlewares/critica.middleware');


router.get('/all-criticas', criticasController.findCriticasController);
router.get('/one-critica/:id', validId, criticasController.findCriticaByIdController);
router.post('/create-critica', validObjectBody, criticasController.createCriticaController);
router.put('/update-critica/:id', validId, validObjectBody, criticasController.updateCriticaController);
router.delete('/delete-critica/:id', validId, criticasController.deleteCriticaController);

module.exports = router;
