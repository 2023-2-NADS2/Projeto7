import { setCookie } from 'cookies-next';
import { useRouter } from 'next/router';
import styles from '../styles/Login.module.css';
import LoginCard from '../src/components/cards/loginCard/login';
import Input from '../src/components/forms/input/input';
import Button from '../src/components/forms/button/button';
import jwt from 'jsonwebtoken';

export default function LoginPage() {
  const router = useRouter();

  const handleForm = async (e) => {
    e.preventDefault(); 

    // Gere um token JWT usando a variável JWT_SECRET
    const token = jwt.sign(user, JWT_SECRET, { expiresIn: '1h' });

    // Configure o token JWT em um cookie usando setCookie
    setCookie('authorization', token);

    // Redirecione o usuário para a página de menu
    router.push('/menu');
  };

  return (
    <div className={styles.background}>
      <LoginCard title="Faça seu login">
        <form className={styles.form}>
          <Input type="email" placeholder="Seu e-mail" />
          <Input type="password" placeholder="Sua senha" />
          <Button onClick={handleForm}>Entrar</Button>
        </form>
      </LoginCard>
    </div>
  );
}
