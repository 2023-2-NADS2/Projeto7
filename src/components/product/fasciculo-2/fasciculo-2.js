import React, { useEffect } from 'react';
import styles from './fasciculo-2.module.css';

function Fasciculo2() {
  return (
    <>
      {/* Início do Main */}
      <main className={styles.mainFasciculo}>
        <div className={styles.tituloFasciculo}>
          <h1>Práticas em Robótica Educacional com Arduino</h1>
        </div>
        <div className={styles.mainContein}>
          <div className={styles.imgFasciculo}>
            <img src="/imagens/img-fasciculo2.jpg" alt="Imagem do Fascículo Educacional" />
          </div>
          <div className={styles.textoFasciculo}>
            <h1>Prática em Robótica</h1>
            <h1>Educacional com Arduino</h1>
            <h3>07 projetos com planos de aulas prontas para usar</h3><br />
            <p>E-book com fundamentos e práticas de robótica educacional com Arduino. Contém a fundamentação sobre o
              que é robótica, robótica educacional e robótica livre + 07 projetos com planos de aulas prontos para
              serem usados.</p><br /><br />
            <a href="https://pay.hotmart.com/J69434031Y?bid=1700140223636" target="_blank" className={styles.buttonFasciculo}><strong>Quero o fascículo</strong></a>
          </div>
        </div>
      </main>
      {/* Fim do Main */}

      {/* Início da Seção: Versão Digital */}
      <section className={styles.sectionFasciculo}>
        <div className={styles.sectionDigital}>
          <div className={styles.conteinDigital}>
            <h1>Versão Digital</h1><br />
            <div className={styles.check}>
              <img src="icon/icon-check.png" alt="Imagem de Check" />
              <p>Receba por e-mail imediatamente.</p>
            </div>
            <div className={styles.check}>
              <img src="icon/icon-check.png" alt="Imagem de Check" />
              <p>Arquivo PDF para ler em seu Pc, tablet ou smartphone</p><br />
            </div><br />
            <h1><strong>R$ 97,00</strong></h1>
            <p>em até 12x de R$ 9,68</p><br /><br />
            <a href="https://pay.hotmart.com/J69434031Y?bid=1700140223636" target="_blank" className={styles.buttonFasciculo}><strong>Quero o fascículo</strong></a>
          </div>
          <div className={styles.imgDigital}>
            <img src="/imagens/img-fasciculo2-1.jpg" alt="Imagem do fascículo digital" />
          </div>
        </div>
      </section>
      {/* Fim da Seção: Versão Digital */}

      {/* Início da Seção: Dúvidas ou quer falar comigo? */}
      <section className={styles.sectionDuvida}>
        <div className={styles.duvidaFasciculo}>
          <h1>Dúvida ou quer falar comigo?</h1><br />
          <p>Se quiser falar conosco ou tirar dúvidas sobre a sua compra envie um e-mail para: <a
            href="mailto:drawedutreimamentos@gmail.com?subject=Assunto da Mensagem&body=Corpo da Mensagem"
            className={styles.emailContact} title="Clique aqui e envie um email"><strong>drawedutreimamentos@gmail.com</strong></a></p><br />
          <p>Dúvidas sobre a entrega do conteúdo?</p>
          <p>Pagamentos feitos por boleto levam até 3 dias úteis para a liberação total do material.</p>
        </div>
      </section>
      {/* Fim da Seção: Dúvidas ou quer falar comigo? */}
    </>
  );
}

export default Fasciculo2;
