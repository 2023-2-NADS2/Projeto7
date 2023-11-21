import React, { useState } from 'react';
import styles from '../../styles/Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Fade } from 'react-awesome-reveal'

function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = async () => {
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email }),
      });

      if (response.ok) {
        console.log('Inscrição bem-sucedida!');
      } else {
        console.error('Erro ao se inscrever:', response.statusText);
      }
    } catch (error) {
      console.error('Erro ao se inscrever:', error.message);
    }
  };

  return (
    <Fade delay={10}> 
    <footer className={styles.footer}>
      <div className={styles.containerFooter}>
        <div className={styles.contein1}>
          <a href="/#">
            <img src="imagens/img-logo-footer.png" alt="Imagem do logo da DrawEdu" />
          </a>
          <p>Soluções Educacionais</p><br />
          <a href="https://api.whatsapp.com/send?phone=5555819974763&text=Ol%C3%A1!%0AGostaria%20de%20saber%20melhor%20sobre%20a%20DrawEdu!" title="Fale conosco pelo Whatsapp">
            <i><FontAwesomeIcon icon={faWhatsapp} className={styles.whatsapp} /></i>
          </a>
          <a href="https://www.instagram.com/drawedu.treinamentos" title="Siga-nos no Instagram">
            <i><FontAwesomeIcon icon={faInstagram} className={styles.instagram} /></i>
          </a>
        </div>
        <div className={styles.contein2}>
          <p><strong>Menu</strong></p><br />
          <ul className={styles.menuItemsFooter}>
            <li><a href="/#" title="Página Principal">Página Principal</a></li>
            <li><a href="/sobre" title="Sobre nós">Sobre nós</a></li>
            <li><a href="/cursos" title="Curso">Curso</a></li>
            <li><a href="/treinamento" title="Treinamento">Treinamento</a></li>
            <li><a href="/oficina" title="Oficina">Oficina</a></li>
            <li><a href="/produto" title="Produto">Produto</a></li><br /><br />
          </ul>
          <p><strong>Links Úteis</strong></p><br />
          <ul className={styles.menuItemsFooter}>
            <li><a className={styles.a} href="/fale-conosco" title="Fale Conosco">Fale Conosco</a></li>
            <li><a href="/localizacao" title="Localização">Localização</a></li>
            <li><a href="/politica-privacidade" title="Política de Privacidade">Política de Privacidade</a></li>
          </ul>
        </div>
        <div className={styles.contein3}>
          <p><strong>Inscreva-se</strong></p><br />
          <input
            className={styles.contein3input}
            type="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className={styles.contein3button}
            onClick={handleSubscribe}
            type="button"
          >
            <strong>Enviar</strong>
          </button>
        </div>
      </div>
      <div className={styles.contein4}>
        <hr />
        <p>DrawEdu® - Todos os direitos reservados</p>
      </div>
    </footer>
    </Fade>
  );
}

export default Footer;
