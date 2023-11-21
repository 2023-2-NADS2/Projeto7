import { login } from '../../../services/user';

export default async (req, res) => {
  if (req.method === 'POST') {
    try {
      const token = await login(req.body);

      if (token) {
        // Gere um token fictício (substitua por geração real em um aplicativo real)
        const fictitiousToken = 'token_ficticio';

        res.setHeader('Set-Cookie', `authorization=${fictitiousToken}; Path=/; HttpOnly`);

        res.status(200).json({ token: fictitiousToken });
      } else {
        // Credenciais inválidas
        res.status(401).json({ message: 'Credenciais inválidas' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Ocorreu um erro durante o login' });
    }
  } else {
    res.status(405).end();
  }
};
