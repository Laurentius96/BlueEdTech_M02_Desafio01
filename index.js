require('dotenv').config();
const express = require('express');
const cors = require('cors');
const route = require('./src/routes/critica.route');
const connectToDatabase = require('./src/database/database');

const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());
connectToDatabase();

app.use('/critica', route);

app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});
