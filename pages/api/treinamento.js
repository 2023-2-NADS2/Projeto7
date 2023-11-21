// Importe o arquivo de configuração do banco de dados
import dbConfig from '../../config/db';
import mysql from 'mysql2/promise';

// Crie uma pool de conexões usando as configurações do banco de dados
const pool = mysql.createPool(dbConfig);

export default async function treinamento(req, res) {
  if (req.method === 'POST') {
    const connection = await pool.getConnection();
    try {
      const { usuario_nome, usuario_email, usuario_telefone } = req.body;

      // Insira os dados do formulário no banco de dados
      await connection.query('INSERT INTO treinamento (nome, email, telefone) VALUES (?, ?, ?)', [
        usuario_nome,
        usuario_email,
        usuario_telefone,
      ]);

      res.status(200).json({ message: 'Formulário enviado com sucesso!' });
    } catch (error) {
      console.error('Erro ao enviar o formulário:', error.message);
      res.status(500).json({ error: 'Erro ao processar o formulário' });
    } finally {
      connection.release();
    }
  } else {
    res.status(405).json({ error: 'Método não permitido' });
  }
}
