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
  const editCritica = req.body;
  const updatedCritica = await criticasService.updateCriticaService(
    idParam,
    editCritica,
  );
  res.send(updatedCritica);
};

const deleteCriticaController = async (req, res) => {
  const idParam = req.params.id;
  await criticasService.deleteCriticaService(idParam);
  res.send({ message: 'Critica deletada com sucesso!' });
};

module.exports = {
  findAllCriticasController,
  findByIdCriticaController,
  createCriticaController,
  updateCriticaController,
  deleteCriticaController,
};
