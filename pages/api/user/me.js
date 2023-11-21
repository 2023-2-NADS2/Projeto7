import { verifica } from '../../../services/user';

export default async (req, res) => {
  if (req.method === 'GET') {
    const { authorization } = req.headers;
    if (!authorization) {
      res.status(401).json({ message: 'Acesso não autorizado' });
      return;
    }

    try {
      const user = verifica(authorization);
      res.status(200).json({ user });
    } catch (error) {
      res.status(401).json({ message: 'Token inválido' });
    }
  } else {
    res.status(405).end();
  }
};
