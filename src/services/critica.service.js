const Critica = require('../models/Critica');

const findCriticasService = async () => {
  const criticas = await Critica.find();
  return criticas;
};

const findCriticaByIdService = async (id) => {
  const critica = await Critica.findById(id);
  return critica;
};

const createCriticaService = async (newCritica) => {
  const criticaCriada = await Critica.create(newCritica);
  return criticaCriada;
};

const updateCriticaService = async (id, criticaEdited) => {
  const criticaAtualizada = await Critica.findByIdAndUpdate(id, criticaEdited);
  return criticaAtualizada;
};

const deleteCriticaService = async (id) => {
  return await Critica.findByIdAndDelete(id);
};

module.exports = {
  findCriticasService,
  findCriticaByIdService,
  createCriticaService,
  updateCriticaService,
  deleteCriticaService,
};
