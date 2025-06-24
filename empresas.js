const express = require('express');
const router = express.Router();
const conexao = require('../conexao');

router.get('/', (req, res) => {
  conexao.query('SELECT * FROM empresas', (erro, resultados) => {
    if (erro) return res.status(500).send(erro);
    res.json(resultados);
  });
});

router.post('/', (req, res) => {
  const { nome, cnpj, email } = req.body;
  conexao.query(
    'INSERT INTO empresas (nome, cnpj, email) VALUES (?, ?, ?)',
    [nome, cnpj, email],
    (erro, resultado) => {
      if (erro) return res.status(500).send(erro);
      res.json({ id: resultado.insertId });
    }
  );
});

module.exports = router;
