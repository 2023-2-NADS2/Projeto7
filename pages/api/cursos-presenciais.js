// Importe o arquivo de configuração do banco de dados
import dbConfig from '../../config/db';
import mysql from 'mysql2/promise';

// Crie uma pool de conexões usando as configurações do banco de dados
const pool = mysql.createPool(dbConfig);

export default async function cursosPresenciais(req, res) {
  if (req.method === 'POST') {
    const connection = await pool.getConnection();
    try {
      const { nome, email, whatsapp, endereco, pagamento } = req.body;

      // Insira os dados do formulário no banco de dados
      await connection.query(
        'INSERT INTO cursos_presenciais (nome, email, whatsapp, endereco, pagamento) VALUES (?, ?, ?, ?, ?)',
        [nome, email, whatsapp, endereco, pagamento.join(', ')]
      );

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
