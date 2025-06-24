const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const empresas = require('./rotas/empresas');
app.use('/empresas', empresas);

app.listen(3000, () => {
  console.log('SAE API rodando na porta 3000 🚀');
});
