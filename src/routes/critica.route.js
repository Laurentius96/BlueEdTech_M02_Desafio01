const express = require('express');
const router = express.Router();

const criticasController = require('../controllers/critica.controller');

router.get('/find-criticas', criticasController.findcriticasController);
router.get('/find-critica/:id', criticasController.findCriticaByIdController);

module.exports = router;