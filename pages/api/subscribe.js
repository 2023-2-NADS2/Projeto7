// Importe o arquivo de configuração do banco de dados
import dbConfig from '../../config/db';
import mysql from 'mysql2/promise';

// Crie uma pool de conexões usando as configurações do banco de dados
const pool = mysql.createPool(dbConfig);

// Função para inscrever um usuário
export default async function inscrever(req, res) {
  if (req.method === 'POST') {
    const connection = await pool.getConnection();
    try {
      const { email } = req.body;

      // Verifique se o usuário já existe no banco de dados
      const [existingUsers] = await connection.query('SELECT * FROM inscricoes WHERE email = ?', [email]);

      if (existingUsers.length > 0) {
        throw new Error('usuario_ja_cadastrado');
      }

      // Insira o novo usuário no banco de dados
      await connection.query('INSERT INTO inscricoes (email) VALUES (?)', [email]);

      res.status(200).json({ message: 'Inscrição bem-sucedida!' });
    } catch (error) {
      console.error('Erro ao se inscrever:', error.message);
      res.status(500).json({ error: 'Erro ao processar a inscrição' });
    } finally {
      connection.release();
    }
  } else {
    res.status(405).json({ error: 'Método não permitido' });
  }
}
