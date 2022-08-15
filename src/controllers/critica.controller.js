const criticasService = require('../services/critica.service');

const findCriticasController = (req, res) => {
  const allCriticas = criticasService.findCriticasService();
  res.send(allCriticas);
};

const findCriticaByIdController = (req, res) => {
  const idParam = req.params.id;
  const chosenCritica = criticasService.findCriticaByIdService(idParam);
  res.send(chosenCritica);
};

const createCriticaController = (req, res) => {
  const critica = req.body;
  const newCritica = criticasService.createCriticaService(critica);
  res.send(newCritica);
};

const updateCriticaController = (req, res) => {
  const idParam = req.params.id;
  const criticaEdit = req.body;
  const updatedCritica = criticasService.updateCriticaService(idParam, criticaEdit);
  res.send(updatedCritica);
};

const deleteCriticaController = (req, res) => {
  const idParam = req.params.id;
  criticasService.deleteCriticaService(idParam);
  res.send({ message: 'Critica deletada com sucesso!' });
};


module.exports = {
  findCriticasController,
  findCriticaByIdController,
  createCriticaController,
  updateCriticaController,
  deleteCriticaController
};
