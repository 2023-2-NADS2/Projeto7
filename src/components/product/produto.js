import React from 'react';
import styles from './produto.module.css'; // Substitua 'seuarquivo' pelo nome do seu arquivo de estilos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Fade } from 'react-awesome-reveal'


// ... (imports)

const Produto = () => {
    return (
        <main>
            <br />
            <Fade delay={10}>
                <section className={styles.sectionMassinha}>
                    <div className={styles.volume1}>
                        <h1>Oficinas Maker com Robótica em Fascículos - Volume 1</h1>
                    </div>
                    <br />
                    <div className={styles.containerVolum}>
                        <div className={styles.imagemP1}>
                            <img src="./imagens/imagem-1.png" alt="livro" />
                        </div>
                        <div>
                            <div className={styles.textoP1}>
                                <h2><span>Massinha Condutora:</span></h2>
                                <h2>Modelando circuitos elétricos</h2>
                                <br />
                                <p>Um passo a passo completo para viver uma experiência maker com crianças e
                                    adolescentes a partir de 07 anos e passar momentos de muita alegria, descoberta e
                                    aprendizagem sobre circuitos elétricos.</p><br /><br />
                            </div>
                            <div className={styles.botaoP1}>
                                <a href="https://pay.hotmart.com/K76610173T?bid=1699392221877" target="_blank">
                                    <strong>Quero o fascículo</strong>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </Fade>
            <Fade delay={10}>
            <section>
                <div className={styles.contentContainer}>
                    <div className={styles.textoP2}>
                        <p><strong>Está cansado(a) de passar horas no Google procurando por atividades diferentes para levar
                            para as aulas?</strong></p>
                        <p><strong>Você até encontra atividades interessantes mas não tem um roteiro aplicável e acaba não
                            conseguindo encaixar na sua rotina de planejamento?</strong></p>
                        <p><strong>Você é professor (a) de ciências, artes, física, robótica/atividades makers?</strong></p>
                        <p><strong>Seria bom ter um roteiro com indicação de vídeos, um experimento, explicação do
                            experimento e ideia de atividade?</strong></p>
                    </div>
                </div>
            </section>
            </Fade>
            <Fade delay={10}>
            <section className={styles.section2}>
                <div className={styles.containerVolum}>
                    <div>
                        <div className={styles.textoP3}>
                            <h2><span>01 oficina passo a passo para uma</span></h2>
                            <h2>experiência maker com todas as idades</h2>
                            <br />
                            <p>Escrevemos um roteiro passo a passo para que a oficina que vivenciamos
                                presencialmente aqui na DrawEdu Escola de Educação Tecnológica e pepudesse ser
                                reproduzida por outros professores e mais pessoas pudessem sentir a alegria de
                                aprender e ensinar se divertindo.</p>
                            <br />
                            <p>É boa a proposta, concorda?</p>
                        </div>
                        <div className={styles.botaoP2}>
                            <a href="https://pay.hotmart.com/K76610173T?bid=1699392221877" target="_blank">
                                <strong>Quero o fascículo</strong>
                            </a>
                        </div>
                    </div>
                    <div className={styles.imagemP2}>
                        <img src="imagens/imagem 2.png" alt="Imagem 2" />
                    </div>
                </div>
            </section>
            </Fade>
            <Fade delay={10}>
            <section className={styles.section3}>
                <div className={styles.containerTextoImagem}>
                    <div className={styles.textoP4}>
                        <div className={styles.item}>
                            <h2>Com o volume 1 do Fascículo, você vai:</h2>
                        </div><br />
                        <div className={styles.item}>
                            <img src="imagens/imagem3.png" alt="Ícone" className={styles.imgIconGreen} />
                            <p><strong>Entender </strong>o que é um circuito elétrico</p>
                        </div><br />
                        <div className={styles.item}>
                            <img src="imagens/imagem3.png" alt="Ícone" className={styles.imgIconGreen} />
                            <p><strong>Encontrar </strong>um roteiro de fácil aplicação para vivenciar uma experiência maker</p>
                        </div><br />
                        <div className={styles.item} id="item3">
                            <img src="imagens/imagem3.png" alt="Ícone" className={styles.imgIconGreen} />
                            <p><strong>Descobrir </strong>como fazer uma massinha de modelar condutora e como usá-la para uma aula com
                                circuitos elétricos</p>
                        </div><br />
                        <div className={styles.item}>
                            <img src="imagens/imagem3.png" alt="Ícone" className={styles.imgIconGreen} />
                            <p><strong>Executar </strong>Executar uma aula divertida e prazerosa para você e seus alunos</p>
                        </div><br />
                        <div className={styles.item} id="item5">
                            <p><strong>+ de 300 exemplares vendidos <br /> Indicado para todas as idades</strong></p>
                        </div>
                    </div>
                </div>
            </section>
            </Fade>
            <Fade delay={10}>
            <section className={styles.containerAutora}>
                <div className={styles.imagemAutora}>
                    <img src="imagens/imagem4.png" alt="Imagem da Amanda, professora e dona da DrawEdu" />
                </div>
                <div className={styles.textoP5}>
                    <h2><span>Por que eu crio materiais para outros professores?</span></h2><br />
                    <p> Porque sou professora e trabalho a mais de 14 anos com educação de crianças e
                        adolescentes. Sou professora de matemática desde 2009 e apaixonada por tecnologia desde
                        sempre. Em 2017 comecei a trabalhar com robótica educacional e em 2018 comecei a me dedicar
                        ao trabalho com educação tecnológica para professores. <br /><br />
                        Entendo sua dificuldade e seus desejos, por que eu passei por várias etapas que passa um
                        professor que começa a trabalhar com robótica e atividades makers: horas de pesquisa, falta
                        de formação, sensação que nada da certo. Estudei muito e continuo estudando, hoje tenho uma
                        bussula que me ajuda a transformar inquietações em ideias e aulas produtivas.</p><br />
                    <p>Sou alguém que começou a trabalhar robótica”contra a própria vontade” e me apaixonei.
                        Hoje tenho uma escola de educação tecnológica presencial a DrawEdu Escola de Tecnologia, que
                        tem uma turma de robótica com Arduíno para adolescentes e Oficinas com Robótica para
                        crianças, e a DrawEdu Treinamentos que atende professores presencialmente e online.</p>
                </div>
            </section>
            </Fade>
            <Fade delay={10}>
            <section className={styles.atividadesRealizadas}>
                <div className={styles.tituloAtividades}>
                    <h2><span>Algumas atividades realizadas por Amanda Marques fora da DrawEdu</span></h2>
                </div>
                <div className={styles.textoP6}>
                    <p>Formação para professores da rede estadual de Pernambuco (GRE Mata Norte)
                    </p>
                    <p>Professora da rede estadual de Pernambuco desde 2017
                    </p>
                    <p><br />Participação no Núcleo de Desenvolvimento Educacional na construção do currículo para os cursos de licenciatura em matemática e especialização em fundamentos do ensino da matemática
                    </p>
                    <p><br />Professora de introdução a robótica educacional no curso de pós-graduação em fundamentos do ensino da matemática na FADIMAB
                    </p>
                    <p>Professora dos anos finais do ensino fundamental por seis anos
                    </p>
                    <p>Professora de prática de ensino, metodologia e didática na licenciatura (FADIMAB)
                    </p>
                </div>
            </section>
            </Fade>
            <Fade delay={10}>
            <section>
                <div className={styles.textoP7}>
                    <h2><span>O materiais da DrawEdu são criados por quem entende do assunto</span></h2>
                    <img src="imagens/aspas.png" alt="aspas" /><br />
                    <p>Sou mestra em Educação Matemática e Tecnológica, atuo na educação há 14 anos e já lecionei em
                        diversos níveis de ensino e instituições, tenho formação em ferramentas colaborativas com a
                        Google, formação em educação midiática, robótica educacional e design educacional.
                    </p>
                </div>
            </section>
            </Fade>
            <Fade delay={10}>
            <section className={styles.sectionGuia}>
                <div className={styles.containerGuia}>
                    <div className={styles.textoP8}>
                        <div className={styles.item}>
                            <h2>Este guia é para você que:</h2>
                        </div><br />
                        <div className={styles.item}>
                            <img src="imagens/imagem3.png" alt="Ícone" className={styles.imgIconGreen} />
                            <p>Quer uma atividade maker fácil e barata para levar para sala de aula</p>
                        </div><br />
                        <div className={styles.item}>
                            <img src="imagens/imagem3.png" alt="Ícone" className={styles.imgIconGreen} />
                            <p>Quer ter uma experiência de aula lúdica carregada de conhecimento</p>
                        </div><br />
                        <div className={styles.item}>
                            <img src="imagens/imagem3.png" alt="Ícone" className={styles.imgIconGreen} />
                            <p>Quer simplificar o trabalho e ter uma aula
                                pronta em menos de cinco minutos</p>
                        </div>
                    </div>
                    <div className={styles.imgMassinha}>
                        <img src="imagens/imagem 8.png" alt="Imagem massinha condutora" />
                    </div>
                </div>
            </section>
            </Fade>
            <Fade delay={10}>
            <section className={styles.sectionExperiencia}>
                <div className={styles.containerExperiencia}>
                    <div className={styles.imagemP9}>
                        <img src="./imagens/imagem 9.png" alt="livro" />
                    </div>
                    <div className={styles.textoBotaoContainer}>
                        <p>Uma experiência completa de uma oficina maker com elementos de robótica com a construção de circuitos eletricos (eletrônica) para você usar nas suas aulas de
                            robótica ou de componentes curriculares como física, ciências e artes.</p><br /><br />
                        <div className={styles.botaoP9}>
                            <a href="https://pay.hotmart.com/K76610173T?bid=1700394439370" target="_blank" className={styles.botaoP9}><strong>Adquirir o meu agora</strong></a>
                        </div>
                    </div>
                </div>
            </section>
            </Fade>
            <Fade delay={10}>
            <section className={styles.opniaoFasciculo}>
                <h2><span>Tem gente executando a oficina do fascículo e querendo mais:</span></h2>
                <div className={styles.imagensDep}>
                    <img src="imagens/depoimentos-1.png" alt="Imagem do depoimento 1" />
                    <img src="imagens/depoimentos-2.png" alt="Imagem do depoimento 2" />
                    <img src="imagens/depoimentos-3.png" alt="Imagem do depoimento 3" />
                </div>
            </section>
            </Fade>
            <Fade delay={10}>
            <section className={styles.sectionFasciculo1}>
                <div className={styles.sectionDigital1}>
                    <div className={styles.conteinDigital1}>
                        <h1>Versão Digital + Bônus</h1><br />
                        <div className={styles.check1}>
                            <img src="imagens/imagem3.png" alt="Imagem de Check" />
                            <p>Receba por e-mail imediatamente.</p>
                        </div>
                        <div className={styles.check1}>
                            <img src="imagens/imagem3.png" alt="Imagem de Check" />
                            <p>Arquivo PDF para ler em seu Pc, tablet<br />
                                ou smartphone</p><br />
                        </div><br />
                        <h1><strong>Por apenas R$ 14,90</strong></h1><br /><br />
                        <a href="https://pay.hotmart.com/K76610173T?bid=1699392221877" target="_blank"
                            className={styles.buttonFasciculo1}><strong>Quero comprar agora</strong></a>
                    </div>
                    <div className={styles.imgDigital1}>
                        <img src="imagens/imagem 8.png" alt="Imagem do fascículo digital" />
                    </div>
                </div>
            </section>
            </Fade>
            <Fade delay={10}>
            <section className={styles.perguntas}>
                <div className={styles.textoP12}>
                    <h2><span>Perguntas Frequentes</span></h2>
                    <br />
                    <div className={styles.pergunta}>
                        <div className={styles.pergunta01}>
                            <input type="checkbox" style={{ position: 'absolute', opacity: 0, width: '100%' }} />
                            <label for="pergunta1">Como terei acesso ao Fascículo? <img src="imagens/seta.png"
                                alt="seta" /></label>
                            <div className={styles.resposta}>
                                <p>Você receberá um e-mail da hotmart com os dados para acessar a área de membros.
                                </p>
                            </div>
                        </div>
                        <div className={styles.pergunta02}>
                            <input type="checkbox" style={{ position: 'absolute', opacity: 0, width: '100%' }} />
                            <label for="pergunta1">Demora quanto tempo para chegar?<img src="imagens/seta.png"
                                alt="seta" /></label>
                            <div className={styles.resposta}>
                                <p>Para pagamento com cartão ou Pix o acesso chegará no seu e-mail em alguns
                                    instantes após a compra. Se a compra for por boleto pode demorar até três dias
                                    úteis, prazo de compensação do boleto.</p>
                            </div>
                        </div>
                        <div className={styles.pergunta03}>
                            <input type="checkbox" style={{ position: 'absolute', opacity: 0, width: '100%' }} />
                            <label for="pergunta1">Possui quantos experimentos?<img src="imagens/seta.png"
                                alt="seta" /></label>
                            <div className={styles.resposta}>
                                <p>O fascículo traz um experimento e indicações de vídeos e questionamentos para
                                    fazer durante sua execução.</p>
                            </div>
                        </div>
                        <div className={styles.pergunta04}>
                            <input type="checkbox" style={{ position: 'absolute', opacity: 0, width: '100%' }} />
                            <label for="pergunta1">É indicado para quais idades?<img src="imagens/seta.png"
                                alt="seta" /></label>
                            <div className={styles.resposta}>
                                <p>É indicado para crianças e adolescentes a partir de 5 anos.</p>
                            </div>
                        </div>
                        <div className={styles.pergunta05}>
                            <input type="checkbox" style={{ position: 'absolute', opacity: 0, width: '100%' }} />
                            <label for="pergunta1">Onde compro os materiais que vou precisar?<img
                                src="imagens/seta.png" alt="seta" /></label>
                            <div className={styles.resposta}>
                                <p>Você encontra os materiais em lojas comuns de eletrônica. E grande parte dos
                                    materiais você já possuirá na sua casa.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </Fade>
            <Fade delay={10}>
            <section className={styles.ajuda}>
                <div className={styles.textoP13}>
                    <h2><span>Precisa de uma ajudinha?</span></h2>
                    <br />
                    <p>Está com alguma dúvida ou dificuldade?</p>
                    <p>Quer um atendimento especial, humano e exclusivo?</p>
                    <p>Me chama no whatsapp se ainda tem alguma dúvida se este material é para você!</p>
                </div>
                <div className={styles.botaoP4}>
                    <a href="https://api.whatsapp.com/send?phone=5581997476388" target="_blank">
                        <i>
                            <FontAwesomeIcon icon={faWhatsapp} className="botaoWhats" /> WhatsApp{' '}
                        </i>
                    </a>
                </div>
            </section>
            </Fade>
            <Fade delay={10}>
            <section className={styles.sectionDuvida1}>
                <div className={styles.duvidaFasciculo1}>
                    <h1>Dúvida ou quer falar comigo?</h1><br />
                    <p>Se quiser falar conosco ou tirar dúvidas sobre a sua compra envie um e-mail para: <a
                        href="mailto:drawedutreimamentos@gmail.com?subject=Assunto da Mensagem&body=Corpo da Mensagem"
                        className={styles.emailContact}
                        title="Clique aqui e envie um email"><strong>drawedutreimamentos@gmail.com</strong></a>
                    </p><br />
                    <p>Dúvidas sobre a entrega do conteúdo?</p>
                    <p>Pagamentos feitos por boleto levam até 3 dias úteis para a liberação total do material.</p>
                </div>
            </section>
            </Fade>
        </main>
    );
};

export default Produto;
