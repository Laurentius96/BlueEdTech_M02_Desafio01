const criticas = [
  {
    id: 1,
    restaurante: 'Mirazur',
    avaliacao:
      'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
    foto: './assets/images/Mirazur.png',
    nota: 5,
  },
  {
    id: 2,
    restaurante: 'Noma',
    avaliacao:
      'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
    foto: './assets/images/Noma.png',
    nota: 3,
  },
  {
    id: 3,
    restaurante: 'Etxebarri',
    avaliacao:
      'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
    foto: './assets/images/Etxebarri.png',
    nota: 4,
  },
];

const findCriticasService = () => {
  return criticas;
};

const findCriticaByIdService = (id) => {
  return criticas.find((critica) => critica.id == id);
};

module.exports = {
  findCriticasService,
  findCriticaByIdService,
};
