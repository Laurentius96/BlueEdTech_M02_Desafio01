const express = require('express');
const router = express.Router();

const criticasController = require('../controllers/critica.controller');

router.get('/find-criticas', criticasController.findcriticasController);
router.get('/find-critica/:id', criticasController.findCriticaByIdController);
router.post('/create', criticasController.createCriticaController);
router.put('/update/:id', criticasController.updateCriticaController);
router.delete('/delete/:id', criticasController.deleteCriticaController);

module.exports = router;
