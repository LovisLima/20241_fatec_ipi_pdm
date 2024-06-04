require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mysql2 = require('mysql2');
const app = express();

app.use(express.json());
app.use(cors());

const {
  PORT,
  DB_HOST,
  DB_USER,
  DB_PASSWORD,
  DB_PORT,
  DB_SCHEMA
} = process.env;


const createConnection = () => {
  return mysql2.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
    database: DB_SCHEMA
  });
};

// Rota GET para obter todos os lembretes
app.get('/lembretes', (req, res) => {
  const connection = createConnection();
  connection.query('SELECT * FROM tb_lembrete', (err, results, fields) => {
    if (err) {
      console.error(err);
      res.status(500).json({ mensagem: 'Deu erro' });
    } else {
      res.json(results);
    }
    connection.end();
  });
});

// Rota POST para adicionar um novo lembrete
app.post('/lembretes', (req, res) => {
  const { texto } = req.body;
  const connection = createConnection();
  connection.query(
    'INSERT INTO tb_lembrete (texto) VALUES (?)',
    [texto],
    (err, results, fields) => {
      if (err) {
        console.error(err);
        res.status(500).json({ mensagem: 'Deu erro' });
      } else {
        // Retorna o lembrete inserido com o ID gerado
        const newLembrete = { id: results.insertId, texto };
        res.status(200).send('Lembrete inserido com sucesso ');
      }
      connection.end();
    }
  );
});


app.put('/lembretes/', (req, res) => {
  const { id, texto } =req.body; 
  const connection = createConnection();
  connection.query(
    'UPDATE tb_lembrete SET texto = ? WHERE id = ?',
    [texto, id],
    (err, results, fields) => {
      if (err) {
        console.error(err);
        res.status(500).json({ mensagem: 'Deu erro' });
      } else {
        res.status(200).send('Lembrete atualizado com sucesso');
      }
      connection.end();
    }
  );
});

app.delete('/lembretes/', (req, res) => {
  const { id } = req.body;
  const connection = createConnection();
  connection.query(
    'DELETE FROM tb_lembrete WHERE id = ?',
    [id],
    (err, results, fields) => {
      if (err) {
        console.error(err);
        res.status(500).json({ mensagem: 'Deu erro' });
      } else {
        res.status(200).send('Lembrete deletado com sucesso');
      }
      connection.end();
    }
  );
});

app.listen(PORT, () => console.log(`Back subiu na porta ${PORT}.`));
