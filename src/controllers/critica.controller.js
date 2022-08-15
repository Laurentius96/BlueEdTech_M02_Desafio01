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

  if (
    !critica ||
    !critica.restaurante ||
    !critica.avaliacao ||
    !critica.foto ||
    !critica.nota
  ) {
    return res
      .status(400)
      .send({ mensagem: 'Você não preencheu todos os dados!!' });
  }

  const newCritica = criticasService.createCriticaService(critica);
  res.send(newCritica);
};

const updateCriticaController = (req, res) => {
  const idParam = req.params.id;
  const criticaEdit = req.body;
  const updatedCritica = criticasService.updateCriticaService(
    idParam,
    criticaEdit,
  );
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
  deleteCriticaController,
};
