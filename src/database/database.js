const mongoose = require('mongoose');

function connectToDatabase() {
  mongoose
    .connect(
      'mongodb+srv://root:lo2028@api-critica.tpi0sjc.mongodb.net/?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    )
    .then(() => {
      console.log('MongoDB Conectado!!');
    })
    .catch((err) => {
      return console.log(`Erro na conexão com o banco: ${err}`);
    });
}

module.exports = connectToDatabase;
