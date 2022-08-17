const Critica = require('../models/Critica');

const findCriticasService = async () => {
  const criticas = await Critica.find();
  return criticas;
};

const findCriticaByIdService = async (id) => {
  const critica = await Critica.findById(id);
  return critica;
};

const createCriticaService = (newCritica) => {
  const newId = criticas.length + 1;
  newCritica.id = newId;
  criticas.push(newCritica);
  return newCritica;
};

const updateCriticaService = (id, criticaEdited) => {
  criticaEdited['id'] = id;
  const criticaIndex = criticas.findIndex((critica) => critica.id == id);
  criticas[criticaIndex] = criticaEdited;
  return criticaEdited;
};

const deleteCriticaService = (id) => {
  const criticaIndex = criticas.findIndex((critica) => critica.id == id);
  return criticas.splice(criticaIndex, 1);
};

module.exports = {
  findCriticasService,
  findCriticaByIdService,
  createCriticaService,
  updateCriticaService,
  deleteCriticaService,
};
