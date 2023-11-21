import React from 'react';
import styles from './index.module.css'; // Importe seus estilos CSS aqui

const Main = () => {
  return (
    <div className={styles.main1}>
      {/* Início do Main */}
      <main className={styles.main}>
        <div className={styles.containerMain}>
          <div className={styles.mainContent}>
            <h1>Educação Tecnológica</h1><br />
            <p>Um hub de educação que une experiências imersivas de aprendizagem, para alunos e professores</p>
            <br /><br />
            <a href="/sobre" className={styles.buttonSaibaMais}><strong>Saiba mais</strong></a>
          </div>
          <div className={styles.conteinImg}>
            <img src="imagens/img-crianca2.jpg" alt="Imagem de uma criança segurança com carrinho robotizado" />
          </div>
        </div>
      </main>
      {/* Fim do Main */}
      {/* Início da Seção "Somos" */}
      <section className={styles.section}>
        <div className={styles.sectionSomos}>
          <h2>Somos</h2>
          <hr />
        </div>
        <div className={styles.imgSelos}>
          <img src="imagens/selo-estudiosidade.png" alt="Imagem de um selo: estudiosidade" className={styles.imgSelo1} />
          <img src="imagens/selo-responsabilidade.png" alt="Imagem de um selo: Responsabilidade" className={styles.imgSelo2} />
          <img src="imagens/selo-jornada-extraordinaria.png" alt="Imagem de um selo: Jornada Extraordinária" className={styles.imgSelo3} />
          <img src="imagens/selo-diversao.png" alt="Imagem de um selo: Diversão" className={styles.imgSelo4} />
        </div>
      </section>
      {/* Fim da Seção "Somos" */}

      {/* Início da Seção "Aulas presenciais para crianças e adolescentes" */}
      <section className={styles.section}>
        <div className={styles.containerSection}>
          <div className={styles.sectionContein1}>
            <img src="imagens/img-crianca1.jpg" alt="Imagem de uma criança montando um robô" />
          </div>
          <div className={styles.conteinCurso}>
            <h1>Aulas para crianças e adolescentes </h1>
            <h3>Presencial</h3><br />
            <hr /><br />
            <p>Os cursos de robótica oferecem uma oportunidade divertida de explorar a tecnologia e uma jornada
              para prepará-los para o futuro tecnológico.</p><br /><br />
            <a href="/cursos" className={styles.buttonSaibaCurso}><strong>Saiba mais</strong></a>
          </div>
        </div>
      </section>
      {/* Fim da Seção "Aulas presenciais para crianças e adolescentes" */}

      {/* Início da Seção "Faixa azul" */}
      <section className={styles.section}>
        <div className={styles.faixa}>
          <p><strong>Robótica • Tecnologia • Aprendizagem • Diversão</strong></p>
        </div>
      </section>
      {/* Seção "Treinamento para professores" */}
      <section className={styles.section}>
        <div className={styles.containerSection3}>
          <div className={styles.conteinTreinamento}>
            <h1>Treinamentos para professores</h1>
            <h3>Presencial | Online</h3><br />
            <hr /><br />
            <p>Projetado para capacitar educadores que desejam se desenvolver em robótica educacional para integrar em suas salas de aulas.</p><br /><br />
            <a href="/treinamento" className={styles.buttonSaibaTreinamento}><strong>Saiba mais</strong></a><br />
          </div>
          <div className={styles.sectionImg2}>
            <img src="imagens/img-homem1.jpg" alt="Imagem de um professor com um robô e tablet na mão" />
          </div>
        </div>
      </section>
      
      {/* Seção "Oficina Maker" */}
      <section className={styles.section}>
        <div className={styles.containerSection4}>
          <div className={styles.textoOficina}>
            <h4>Presencial</h4><br />
            <p>A Oficina Maker é voltada para as crianças, um espaço onde os pequenos inventores podem explorar, criar e dar vida às suas ideias.</p><br /><br />
            <a href="/oficina" className={styles.buttonSaibaOficina}><strong>Saiba mais</strong></a>
          </div>
          <div className={styles.oficinaContein1}>
            <img src="imagens/oficina-maker.png" alt="imagem com uma escrita 'Oficina Maker'" />
          </div>
          <div className={styles.oficinaContein2}>
            <img src="imagens/img-robo.jpg" alt="Imagem de um carrinho robotizado" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Main;