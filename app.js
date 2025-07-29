const express = require('express');
const app = express();
const empresas = require('./rotas/empresas');

app.use(express.json());
app.get('/', (req, res) => {
  res.send('API SAE rodando!');
});
app.use('/empresas', empresas);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
