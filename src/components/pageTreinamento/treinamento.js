import React, { useState } from 'react';
import styles from './treinamento.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Fade } from 'react-awesome-reveal'

function TreinamentoForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    usuario_nome: '',
    usuario_email: '',
    usuario_telefone: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.forms}>
      <div className={styles.formDados}>
        <label htmlFor="usuario_nome">Nome *</label>
        <input
          type="text"
          className={styles.nome}
          name="usuario_nome"
          value={formData.usuario_nome}
          onChange={handleChange}
        />
      </div>
      <div className={styles.formDados}>
        <label htmlFor="usuario_email">E-mail *</label>
        <input
          type="email"
          className={styles.email}
          name="usuario_email"
          value={formData.usuario_email}
          onChange={handleChange}
        />
      </div>
      <div className={styles.formDados}>
        <label htmlFor="usuario_telefone">Telefone *</label>
        <input
          type="tel"
          className={styles.telefone}
          name="usuario_telefone"
          value={formData.usuario_telefone}
          onChange={handleChange}
        />
      </div>
      <br />
      <div className={styles.buttonEnviarForm}>
        <button type="submit">
          <strong>Enviar</strong>
        </button>
      </div>
    </form>
  );
}

function Treinamento() {
  const handleSubmitForm = async (formData) => {
    try {
      const response = await fetch('/api/treinamento', {
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
    <div className={styles.container}>
      <Fade delay={10}>
        {/* Início do Main */}
        <main className={styles.mainTreinamento}>
          <div className={styles.treinamentoTitulo}>
            <h1> Treinamentos em Robótica Educacional com Arduino</h1>
            <p>Escolas e Professores</p>
          </div>
          <div className={styles.treinamentoImg}>
            <img src="/imagens/img-treinamento.png" alt="Imagem da professora dando treinamento online" />
          </div>
          <div className={styles.treinamentoTexto}>
            <h3>Presencial | Online</h3><br />
            <p>Capacite sua equipe educacional com nosso treinamento completo em robótica educacional com Arduino. Abordamos os fundamentos, práticas e metodologias de ensino e avaliação, permitindo que professores da educação básica iniciem no mundo da robótica educacional, mesmo que estejam começando do zero.</p><br />
            <p>As aulas on-line são gravadas e hospedadas na plataforma Hotmart, oferecendo flexibilidade de aprendizado. Além disso, disponibilizamos um E-books com 07 Práticas em Robótica Educacional com Arduino , proporcionando um recurso valioso para aprimorar suas aulas.</p>
          </div>
        </main>
      </Fade>
      {/* Fim do Main */}
      {/* Inicio da Seção: Formulário */}
      <Fade delay={10}>
      <section className={styles.sectionForm}>
        <div className={styles.tituloForm}>
          <h1>Quer levar a educação robótica para sala de aula?</h1>
          <p>Para maiores informações, preencha o formulário abaixo</p>
        </div>
        <div className={styles.formTreinamento}>
          <h2>Quer saber mais? Agende uma visita, vamos até você!</h2>
          <p>Por favor, informe seus dados para entrarmos em contato</p>
          <br />
          <TreinamentoForm onSubmit={handleSubmitForm} />
          <hr /><br />
          <div className={styles.textoForm}>
            <p>Ou se preferir, nos contate pelo WhatsApp.</p>
            <p>Clicando no botão abaixo:</p><br />
          </div>
          <a href="https://api.whatsapp.com/send?phone=5555819974763&text=Ol%C3%A1!%0AGostaria%20de%20saber%20melhor%20sobre%20a%20DrawEdu!" className={styles.buttonAgendeWhats}><i><FontAwesomeIcon icon={faWhatsapp} /> Agende pelo WhatsApp </i></a><br /><br /><br /><br />
        </div>
      </section>
      </Fade>
      {/* Fim da Seção: Formulário */}
    </div>
  );
}

export default Treinamento;
