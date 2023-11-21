import { useState } from 'react';
import { setCookie } from 'cookies-next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '../styles/Cadastro.module.css';
import LoginCard from '../src/components/cards/loginCard/login';
import Input from '../src/components/forms/input/input';
import Button from '../src/components/forms/button/button';

export default function CadastroPage() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
  });

  const [error, setError] = useState('');
  const router = useRouter();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      // Valide os campos do formulário
      if (!formData.nome || !formData.email || !formData.senha) {
        throw new Error('Por favor, preencha todos os campos.');
      }

      // Enviar dados do formulário para a API de cadastro
      const response = await fetch('/api/user/cadastro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message);
      }

      const json = await response.json();
      setCookie('authorization', json);
      router.push('/login'); // Redireciona para a página de login após o cadastro bem-sucedido
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className={styles.background}>
      <LoginCard title="Crie sua conta">
        <form className={styles.form} onSubmit={handleFormSubmit}>
          <Input
            type="text"
            name="nome"
            placeholder="Seu nome"
            value={formData.nome}
            onChange={handleChange}
          />
          <Input
            type="email"
            name="email"
            placeholder="Seu e-mail"
            value={formData.email}
            onChange={handleChange}
          />
          <Input
            type="password"
            name="senha"
            placeholder="Sua senha"
            value={formData.senha}
            onChange={handleChange}
          />
          <Button type="submit">Cadastrar</Button>
          {error && <p className="error">{error}</p>}
          <Link href="/login" className={styles.conta}>Já possui uma conta?</Link>
        </form>
      </LoginCard>
    </div>
  );
}
