const express = require('express');
const app = express();
const empresas = require('./rotas/empresas');

// Middleware para aceitar JSON
app.use(express.json());

// Rota de teste
app.get('/', (req, res) => {
  res.send('API SAE rodando!');
});

// Rota para empresas
app.use('/empresas', empresas);

// Porta automática do Railway
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
