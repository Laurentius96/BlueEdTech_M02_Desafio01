const criticas = [
  {
    id: 1,
    restaurante: "Mirazur",
    avaliacao:"Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    foto: "./assets/images/Mirazur.png",
    nota: 5,
  },
  {
    id: 2,
    restaurante: "Noma",
    avaliacao: "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    foto: "./assets/images/Noma.png",
    nota: 4,
  },
  {
    id: 3,
    restaurante: "Etxebarri",
    avaliacao:"Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    foto: "./assets/images/Etxebarri.png",
    nota: 3,
  },
];

const findCriticasService = () => {
  return criticas;
};

const findCriticaByIdService = (id) => {
  return criticas.find((critica) => critica.id == id);
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
  deleteCriticaService
};
