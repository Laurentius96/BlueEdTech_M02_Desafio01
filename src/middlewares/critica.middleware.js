const mongoose = require('mongoose');

const validId = (req, res, next) => {
  const idParam = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'ID inválido!' });
  }
  next();
};

const validObjectBody = (req, res, next) => {
  const critica = req.body;
  if (
    !critica ||
    !critica.sabor ||
    !critica.descricao ||
    !critica.foto ||
    !critica.preco
  ) {
    return res
      .status(400)
      .send({ message: 'Envie o todos os campos da critica!' });
  }
  next();
};

module.exports = {
  validId,
  validObjectBody,
};