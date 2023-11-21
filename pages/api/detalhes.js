// pages/api/detalhes.js

import jwt from 'jsonwebtoken';
const SECRET = process.env.JWT_SECRET;


export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).end(); // Método não permitido
  }

  // Obtenha o token de autenticação do cabeçalho da solicitação
  const authorization = req.headers.authorization;

  if (!authorization) {
    return res.status(401).json({ message: 'Token de autenticação ausente' });
  }

  // Chave secreta para verificar o token (substitua com sua chave real)
  const secretKey = SECRET;

  // Realize a lógica para verificar e buscar os detalhes do usuário com base no token de autenticação
  try {
    // Verifique e decodifique o token
    const decodedToken = jwt.verify(authorization, secretKey);

    // Use o token decodificado para buscar os detalhes do usuário, por exemplo, em um banco de dados
    // Substitua esta parte com a lógica real de busca dos detalhes do usuário
    const userDetails = { nome: 'Nome do Usuário', outrosDetalhes: 'Outros detalhes' };

    res.status(200).json(userDetails);
  } catch (error) {
    return res.status(401).json({ message: 'Token de autenticação inválido ou expirado' });
  }
}
