import jwt from 'jsonwebtoken';
import mysql from 'mysql2/promise';
import dbConfig from '../config/db';

const SECRET = process.env.JWT_SECRET;
const pool = mysql.createPool(dbConfig);

async function generateToken(user) {
  return jwt.sign({ id: user.id, email: user.email }, SECRET);
}

function readToken(token) {
  try {
    return jwt.verify(token, SECRET);
  } catch (err) {
    throw new Error('token_invalido');
  }
}

export async function cadastro(body) {
  const connection = await pool.getConnection();
  try {
    // Verifique se o usuário já existe no banco de dados
    const [existingUsers] = await connection.query('SELECT * FROM usuarios WHERE email = ?', [body.email]);

    if (existingUsers.length > 0) {
      throw new Error('usuario_ja_cadastrado');
    }

    // Insira o novo usuário no banco de dados
    await connection.query('INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)', [body.nome, body.email, body.senha]);

    const token = generateToken(body);
    return token;
  } finally {
    connection.release();
  }
}

export async function login(body) {
  const connection = await pool.getConnection();
  try {
    // Busque o usuário com base no e-mail
    const [users] = await connection.query('SELECT id, senha FROM usuarios WHERE email = ?', [body.email]);

    if (users.length === 0) {
      throw new Error('usuario_nao_encontrado');
    }

    const user = users[0];

    // Verifique a senha do usuário (não armazene senhas em texto plano no banco de dados)
    if (user.senha !== body.senha) {
      throw new Error('senha_incorreta');
    }

    const token = generateToken({ id: user.id, email: body.email });
    return token;
  } finally {
    connection.release();
  }
}

export function verifica(token) {
  return readToken(token);
}
