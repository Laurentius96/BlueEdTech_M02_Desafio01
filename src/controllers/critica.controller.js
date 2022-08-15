const criticasService = require('../services/criticas.service');

const findCriticasController = (req, res) => {
  const allCriticas = criticasService.findCriticasService();
  res.send(allCriticas);
};

const findCriticaByIdController = (req, res) => {
  const idParam = req.params.id;
  const chosenCritica = criticasService.findCriticaByIdService(idParam);
  res.send(chosenCritica);
};

module.exports = {
  findCriticasController,
  findCriticaByIdController,
};