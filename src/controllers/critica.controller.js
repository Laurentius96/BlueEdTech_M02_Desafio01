const mongoose = require('mongoose');
const criticasService = require('../services/critica.service');

const findCriticasController = async (req, res) => {
  const allCriticas = await criticasService.findCriticasService();
  res.send(allCriticas);
};

const findCriticaByIdController = async (req, res) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    res.status(400).send({ message: 'ID inválido!' });
    return;
  }

  const chosenCritica = await criticasService.findCriticaByIdService(idParam);

  if (!chosenCritica) {
    return res.status(404).send({ message: 'Avaliação não encontrada!' });
  }

  res.send(chosenCritica);
};

const createCriticaController = async (req, res) => {
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

  const newCritica = await criticasService.createCriticaService(critica);
  res.send(newCritica);
};

const updateCriticaController = async (req, res) => {
  const idParam = req.params.id;
  const criticaEdit = req.body;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    res.status(400).send({ message: 'ID inválido!' });
    return;
  }

  const chosenCritica = await criticasService.findCriticaByIdService(idParam);

  if (!chosenCritica) {
    return res.status(404).send({ message: 'Avaliação não encontrada!' });
  }

  if (
    !criticaEdit ||
    !criticaEdit.restaurante ||
    !criticaEdit.avaliacao ||
    !criticaEdit.foto ||
    !criticaEdit.nota
  ) {
    return res.status(400).send({
      message: 'Você não preencheu todos os dados para editar a avaliação!',
    });
  }

  const updatedCritica = await criticasService.updateCriticaService(
    idParam,
    criticaEdit,
  );

  res.send(updatedCritica);
};

const deleteCriticaController = (req, res) => {
  const idParam = +req.params.id;
  if (!idParam) {
    return res.status(404).send({ message: 'Avaliação não encontrada!' });
  }
  criticasService.deleteCriticaService(idParam);
  res.send({ message: 'Avaliação deletada com sucesso!' });
};

module.exports = {
  findCriticasController,
  findCriticaByIdController,
  createCriticaController,
  updateCriticaController,
  deleteCriticaController,
};
