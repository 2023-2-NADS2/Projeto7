import React from 'react';
import styles from '../../components/about/sobre.module.css'
import { Fade } from 'react-awesome-reveal'

function Sobre() {
    return (
        <main>
        <Fade>
            <div className={styles.containerMainSobre}>
                <div className={styles.containerTexto}>
                    <h1>DrawEdu: Capacitando o Futuro com Educação Tecnológica</h1><br />
                        <p>Somos um hub de educação que conecta experiências de aprendizado envolventes para alunos e
                            professores. Especializados em treinamentos de educação tecnológica para escolas e professores,
                            oferecemos recursos valiosos para educadores que desejam introduzir a tecnologia em suas salas
                            de aula. Nossos cursos de robótica educacional com Arduino são perfeitos para professores de
                            todos os níveis, mesmo aqueles que estão começando do zero. Com aulas on-line flexíveis
                            hospedadas na plataforma Hotmart, nossos treinamentos permitem que os educadores avancem no seu
                            próprio ritmo.</p><br />
                            <p>Nosso compromisso não se limita às salas de aula dos professores. Oferecemos cursos de robótica
                                para crianças e adolescentes, bem como oficinas de robótica projetadas exclusivamente para
                                crianças, criadas para estimular a criatividade e o aprendizado prático. Aqui, as crianças
                                exploram um mundo onde teoria e diversão se unem, enquanto projetam, criam e programam seus
                                próprios robôs em um ambiente envolvente e educativo. Aqui, o conhecimento é o caminho para um
                                mundo repleto de possibilidades.</p>
                        </div>
                        <div className={styles.conteinImagem}>
                            <img src="../../imagens/img-jornada-extraordinaria.png" alt="Imagem de uma escrita 'Jornada Extraordinária' com #" className={styles.imagem02} />
                            <img src="../../imagens/img-robo-sorriso.png" alt="Imagem de um robô sorrindo" className={styles.imagem01} />
                        </div>
                        <div className={styles.hashtag}>
                            <p><strong>#JunteSeANós</strong></p>
                        </div>
                </div>
                </Fade>
        </main>
    );
}

export default Sobre;