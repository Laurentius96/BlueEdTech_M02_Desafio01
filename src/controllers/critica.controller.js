const mongoose = require('mongoose');
const criticasService = require('../services/critica.service');

const findAllCriticasController = async (req, res) => {
  const allCriticas = await criticasService.findAllCriticasService();
  if (allCriticas.length == 0) {
    return res
      .status(404)
      .send({ message: 'Não existe nenhuma critica cadastrada!' });
  }
  res.send(allCriticas);
};

const findByIdCriticaController = async (req, res) => {
  const idParam = req.params.id;
  const chosenCritica = await criticasService.findByIdCriticaService(idParam);
  if (!chosenCritica) {
    return res.status(404).send({ message: 'Critica não encontrada!' });
  }
  res.send(chosenCritica);
};

const createCriticaController = async (req, res) => {
  const critica = req.body;
  const newCritica = await criticasService.createCriticaService(critica);
  res.status(201).send(newCritica);
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

const deleteCriticaController = async (req, res) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    res.status(400).send({ message: 'ID inválido!' });
    return;
  }

  const chosenCritica = await criticasService.findCriticaByIdService(idParam);

  if (!chosenCritica) {
    return res.status(404).send({ message: 'Avaliação não encontrada!' });
  }

  await criticasService.deleteCriticaService(idParam);

  res.send({ message: 'Avaliação deletada!' });
};

module.exports = {
  findAllCriticasController,
  findByIdCriticaController,
  createCriticaController,
  updateCriticaController,
  deleteCriticaController,
};
