const mongooose = require('mongoose');

const CriticaSchema = new mongooose.Schema({
    restaurante: { type: String, required: true },
    avaliacao: { type: String, required: true },
    foto: { type: String, required: true },
    nota: { type: Number, required: true },
  });

  const Critica = mongooose.model('criticas', CriticaSchema);

  module.exports = Critica;