import React, { useState } from 'react';
import styles from './pageOficina.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Fade } from 'react-awesome-reveal'

function OficinaForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    whatsapp: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.contatoForm}>
      <p className={styles.textoMatriculas}>Assim que abrirem as matrículas, entraremos em contato</p>
      <p>Por favor, informe seus dados para entrarmos em contato</p>
      <br />
      <label htmlFor="nome">Nome do responsável *</label>
      <input
        type="text"
        id="nome"
        name="nome"
        value={formData.nome}
        onChange={handleChange}
        required
      />

      <label htmlFor="email">E-mail *</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <label htmlFor="whatsapp">Telefone *</label>
      <input
        type="tel"
        id="whatsapp"
        name="whatsapp"
        value={formData.whatsapp}
        onChange={handleChange}
        required
      />
      <button type="submit" className={styles.botaoEnviar}>
        Enviar
      </button>
      <br />
      <br />
      <hr />
      <div className={styles.textoForm}>
        <p>Ou se preferir, nos contate pelo WhatsApp.</p>
        <p>Clicando no botão abaixo:</p>
        <br />
      </div>
      <a href="https://api.whatsapp.com/send?phone=5555819974763&text=Ol%C3%A1!%0AGostaria%20de%20saber%20melhor%20sobre%20a%20DrawEdu!" className={styles.buttonAgendeWhats}>
        <i>
          <FontAwesomeIcon icon={faWhatsapp} className="botaoWhats"/> Agende pelo WhatsApp{' '}
        </i>
      </a>
      <br />
      <br />
      <br />
      <br />
    </form>
  );
}

function Oficina() {
  const handleSubmitForm = async (formData) => {
    try {
      const response = await fetch('/api/oficina', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Formulário enviado com sucesso!');
        // Adicione aqui qualquer lógica adicional após o envio do formulário
      } else {
        console.error('Erro ao enviar o formulário:', response.statusText);
      }
    } catch (error) {
      console.error('Erro ao enviar o formulário:', error.message);
    }
  };

  return (
    <main className='main'>
      <Fade delay={10}>
      <section>
        <div className={styles.image1}>
          <img src="imagens/Img.png" alt="Foto da oficina com crianças" />
        </div>
      </section>
      </Fade>
      <Fade delay={10}>
      <section className={styles.contentContainer}>
        <div className={styles.leftContent}>
          <img src="imagens/oficina-maker.png" alt="Logo oficina maker" className={styles.imagemOficinaMaker} />
          <p className={styles.textoImagem}>Robótica Criativa para Crianças</p>
        </div>
        <div className={styles.rightContent}>
          <p>Nossas oficinas são projetadas exclusivamente para crianças que desejam explorar o mundo da robótica de maneira divertida e criativa, por meio da construção e programação de robôs e dispositivos.</p>
          <br />
          <p>A cada Oficina trazemos um tema diferente para nossos pequenos makers.</p>
        </div>
      </section>
      </Fade>
      <Fade delay={10}>
      <section className={styles.oficinaExperiencia}>
        <div className={styles.depoimentos}>
          <p className={styles.textoExperiencia}>O que falam da experiência de participar da Oficina?</p>
          <p>Confira o depoimento das mamães dos nossos pequenos makers</p>
        </div>
        <div className={styles.imagensDepoimento}>
          <img src="imagens/dep1.png" alt="Depoimento 01" />
          <img src="imagens/dep3.png" alt="Depoimento 02" />
        </div>
      </section>
      </Fade>
      <Fade delay={10}>
      <section className={styles.form}>
        <div>
          <OficinaForm onSubmit={handleSubmitForm} />
        </div>
      </section>
      </Fade>
    </main>
  );
}

export default Oficina;
