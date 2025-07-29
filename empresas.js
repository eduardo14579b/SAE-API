const express = require('express');
const router = express.Router();
const conexao = require('../conexao');

router.get('/', async (req, res) => {
  try {
    const resultado = await conexao.query('SELECT * FROM empresas');
    res.json(resultado.rows);
  } catch (erro) {
    console.error('Erro ao buscar empresas:', erro);
    res.status(500).json({ erro: 'Erro ao buscar empresas' });
  }
});

module.exports = router;
