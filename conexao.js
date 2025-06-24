const mysql = require('mysql2');

const conexao = mysql.createConnection({
  host: 'SEU_IP_DO_CLOUD_SQL',
  user: 'USUARIO_DO_CLOUD_SQL',
  password: 'SENHA_DO_CLOUD_SQL',
  database: 'sae_estoque'
});

conexao.connect(err => {
  if (err) {
    console.error('Erro ao conectar no banco: ' + err.stack);
    return;
  }
  console.log('Conectado ao MySQL como id ' + conexao.threadId);
});

module.exports = conexao;
