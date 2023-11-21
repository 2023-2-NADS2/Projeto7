import React from 'react';
import styles from './pageFaleConosco.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Fade } from 'react-awesome-reveal'

function FaleConosco() {
  return (
    <div className={styles.mainLocation}>
      <h1>Fale Conosco</h1>
      <Fade delay={10}>
      <section className={styles.whatsContainer}>
      <div className={styles.whatsContent}>
        <p className={styles.numeroWhats}>+ 55 (81) 997476388</p>
        <a href="https://api.whatsapp.com/send?phone=5555819974763&text=Ol%C3%A1!%0AGostaria%20de%20saber%20melhor%20sobre%20a%20DrawEdu!" className={styles.buttonAgendeWhats}>
        <i>
          <FontAwesomeIcon icon={faWhatsapp} className="botaoWhats"/> WhatsApp{' '}
        </i>
      </a>
      </div>
    </section>
    </Fade>
    <Fade delay={10}>
      <section className={styles.form}>
        <div>
          <form action="#" className={styles.contatoForm}>
            <p className={styles.textoMatriculas}>
              Preencha o formulário que entraremos em contato
            </p>
            <br />
            <label htmlFor="nome">Nome *</label>
            <input type="text" id="nome" name="nome" required />
            <label htmlFor="email">E-mail *</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="assunto">Assunto *</label>
            <input type="text" id="assunto" name="assunto" required />
            <label htmlFor="mensagem">Mensagem *</label>
            <input type="text" id="mensagem" name="mensagem" required />
            <br />
            <button type="submit" className={styles.botaoEnviar}>
              Enviar
            </button>
            <br />
          </form>
        </div>
      </section>
      </Fade>
    </div>
  );
}

export default FaleConosco;
