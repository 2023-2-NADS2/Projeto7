import React, { useState } from 'react';
import styles from './cursos.module.css';
import { Fade } from 'react-awesome-reveal'

function CursosPresenciaisForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    whatsapp: '',
    endereco: '',
    pagamento: [],
  });

  const handleChange = (e) => {
    if (e.target.type === 'checkbox') {
      if (e.target.checked) {
        setFormData({ ...formData, pagamento: [...formData.pagamento, e.target.value] });
      } else {
        setFormData({
          ...formData,
          pagamento: formData.pagamento.filter((item) => item !== e.target.value),
        });
      }
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.contatoForm}>
      <p>Preencha o formulário que entraremos em contato</p>
      <br />
      <label htmlFor="nome">Nome do responsável *</label>
      <input type="text" id="nome" name="nome" value={formData.nome} onChange={handleChange} required />

      <label htmlFor="email">E-mail *</label>
      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

      <label htmlFor="whatsapp">WhatsApp *</label>
      <input type="tel" id="whatsapp" name="whatsapp" value={formData.whatsapp} onChange={handleChange} required />

      <label htmlFor="endereco">Endereço *</label>
      <input type="text" id="endereco" name="endereco" value={formData.endereco} onChange={handleChange} required />

      <p>Forma de pagamento *</p>
      <div className={styles.formPagamento}>
        <label className={styles.check} htmlFor="pix">
          <input
            type="checkbox"
            id="pix"
            name="pagamento"
            value="pix"
            checked={formData.pagamento.includes('pix')}
            onChange={handleChange}
            className={styles.checkboxpag}
          />
          Pix
        </label>
        <label className={styles.check} htmlFor="boleto">
          <input
            type="checkbox"
            id="boleto"
            name="pagamento"
            value="boleto"
            checked={formData.pagamento.includes('boleto')}
            onChange={handleChange}
            className={styles.checkboxpag}
          />
          Boleto
        </label>
        <label className={styles.check} htmlFor="cartao">
          <input
            type="checkbox"
            id="cartao"
            name="pagamento"
            value="cartao"
            checked={formData.pagamento.includes('cartao')}
            onChange={handleChange}
            className={styles.checkboxpag}
          />
          Cartão
        </label>
        <br />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}

function CursosPresenciais() {
  const handleSubmitForm = async (formData) => {
    try {
      const response = await fetch('/api/cursos-presenciais', {
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
      <section className={styles.containerCurso}>
        <div className={styles.tituloCurso}>
            <h1>Curso de Iniciação à Robótica para Crianças</h1>
        </div>
        <div className={styles.cursoSection}>
            <div className={styles.imagemCrianca}>
                <img src="imagens/img-5 1.png" alt="Criança mexendo com robô" />
            </div>
            <div className={styles.cursoInfo}>
                <p><strong>Aulas presenciais</strong></p><br />
                <p><strong>Carga horária: 60 horas</strong></p><br />
                <p><strong>Certificado</strong></p>
            </div>
            <div className={styles.descricaoCurso}>
                <p>Nosso curso de iniciação à robótica é perfeito para crianças e pequenos entusiastas
                    que desejam dar os primeiros passos no mundo da tecnologia.</p><br />
                <p>As aulas são exclusivamente presenciais, onde os alunos têm a oportunidade de aprender,
                    experimentar, criar robôs e dispositivos programáveis de forma prática. Essa abordagem única
                    permite que o conhecimento teórico se conecte com a diversão e a criatividade, preparando nossos
                    jovens para um futuro repleto de oportunidades.</p>
            </div>
        </div>
      </section>
      </Fade>
      <Fade delay={10}>
      <section className={styles.cursoSection2}>
        <div className={styles.tituloCurso2}>
            <h1>Curso de Iniciação à Robótica para Adolescentes</h1>
        </div>
        <div className={styles.cursoAdolescente}>
            <div className={styles.cursoInfo2}>
                <p><strong>Aulas presenciais</strong></p><br />
                <p><strong>Carga horária: 120 horas</strong></p><br />
                <p><strong>Certificado</strong></p>
            </div>
            <div className={styles.imagemAdolescente}>
                <img src="imagens/img-7 2.png" alt="Adolescentes mexendo com eletrônica" />
            </div>
            <div className={styles.descricaoCurso2}>
                <p>Se você é um adolescente em busca de desafios e descobertas, nosso curso de iniciação de robótica
                    foi projetado especialmente para você. Aventure-se em um mundo onde a tecnologia e a criatividade se
                    encontram.</p><br />
                <p>Aqui, você aprofundará suas habilidades ao projetar e programar robôs desde a fase inicial até ao
                    mais complexos, desafiando suas capacidades de resolução de problemas e criatividade.</p>
            </div>
        </div>
      </section>
      </Fade>
      <Fade delay={10}>
      <section className={styles.cursoSection3}>
        <div className={styles.curso3}>
          <h1>Quer saber mais e se inscrever no curso presencial?</h1>
        </div>

        <div className={styles.formularioCurso}>
          <CursosPresenciaisForm onSubmit={handleSubmitForm} />
        </div>
      </section>
      </Fade>
    </main>
  );
}

export default CursosPresenciais;
