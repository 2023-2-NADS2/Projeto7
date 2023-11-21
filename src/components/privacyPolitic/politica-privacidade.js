import React from 'react';
import styles from './politica-privacidade.module.css';
import { Fade } from 'react-awesome-reveal'


function PoliticaPrivacidade() {
    return (
        <main className={styles.conteinPolitPriv}>
            <div className={styles.tituloContein}>
                <h1>Política de Privacidade - DrawEdu</h1>
            </div>
            <div className={styles.politicaPriv01}>
                <Fade delay={10}>
                    <p>A <strong>DrawEdu</strong>, neste documento, estabelece a política de privacidade para o uso do site
                        DrawEdu, bem como para os cursos hospedados na plataforma Hotmart. A proteção da sua privacidade é
                        de extrema importância para nós. Por isso, recomendamos que você leia atentamente esta política para
                        entender como suas informações pessoais são coletadas, usadas e protegidas.</p><br />
                    <p><strong>Data de vigência:</strong> 01/11/2023</p><br />
                    <p>A Loja de Cursos do Hotmart está comprometida em proteger a sua privacidade. Esta Política de
                        Privacidade descreve como coletamos, usamos e protegemos as informações pessoais dos nossos
                        clientes, visitantes do site e outros usuários.</p>
                </Fade>
            </div>
            <div className={styles.politicaPriv02}>
                <Fade delay={10}>
                    <p><strong>Coleta de Informações Pessoais</strong></p><br />
                    <p>A DrawEdu coleta informações pessoais, como nome, endereço de e-mail, informações de contato e outras informações relevantes, apenas quando você as fornece voluntariamente. Essas informações são utilizadas para personalizar sua experiência de usuário, processar pedidos de cursos, fornecer suporte ao cliente e mantê-lo informado sobre atualizações e novidades.</p><br />
                    <p><strong>1.1. Informações fornecidas por você:</strong></p>
                    <p>Ao se inscrever em nossa loja, você pode ser solicitado a fornecer informações pessoais, como nome, endereço de e-mail, número de telefone e informações de pagamento. Esses dados são usados para criar sua conta, processar pagamentos e fornecer suporte ao cliente.</p><br />
                    <p><strong>1.2. Informações coletadas automaticamente:</strong></p>
                    <p>Quando você visita nosso site, podemos coletar automaticamente informações, como seu endereço IP, tipo de navegador, sistema operacional, páginas visitadas e horários de acesso. Esses dados são utilizados para fins de análise e aprimoramento do site. Uso de Informações Pessoais</p><br />
                    <p><strong>2.1. Utilização geral:</strong></p>
                    <p>Utilizamos suas informações pessoais para fornecer nossos cursos, responder a suas perguntas, processar transações e fornecer suporte ao cliente. Também podemos usar suas informações para fins administrativos e para melhorar a experiência do usuário.</p><br />
                    <p><strong>2.2. Comunicações de marketing:</strong></p>
                    <p>Com o seu consentimento, podemos enviar-lhe informações sobre cursos, promoções e ofertas especiais. Você pode optar por não receber essas comunicações a qualquer momento. Compartilhamento de Informações Pessoais</p><br />
                    <p><strong>3.1. Parceiros de pagamento:</strong></p>
                    <p>Para processar pagamentos, podemos compartilhar suas informações com provedores de serviços de pagamento confiáveis. Eles têm suas próprias políticas de privacidade para proteger suas informações.</p><br />
                    <p><strong>3.2. Prestadores de serviços: </strong></p>
                    <p>Podemos contratar terceiros para nos ajudar a administrar nosso site e fornecer serviços relacionados. Esses prestadores de serviços têm acesso limitado às suas informações e são obrigados a protegê-las.</p><br />
                    <p><strong>3.3. Cumprimento da lei:</strong></p>
                    <p>Podemos divulgar informações pessoais se exigido por lei ou regulamentações, ou para proteger nossos direitos, privacidade, segurança ou propriedade, ou a de terceiros. Segurança de Dados tomamos medidas razoáveis para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição. No entanto, nenhum sistema de segurança é totalmente à prova de falhas. </p><br />
                    <p><strong>Acesso e Controle das Suas Informações:</strong></p>
                    <p>Você tem o direito de acessar, corrigir ou excluir suas informações pessoais a qualquer momento. Você também pode optar por não receber comunicações de marketing.</p><br />
                    <p><strong>Alterações a esta Política de Privacidade:</strong></p>
                    <p>Reservamo-nos o direito de atualizar esta Política de Privacidade periodicamente. Notificaremos você sobre quaisquer alterações significativas. A continuação do uso de nossos serviços após as alterações implica na sua aceitação das mesmas.</p><br />
                    <p><strong>Contato:</strong></p>
                    <p>Se tiver dúvidas, preocupações ou comentários sobre esta Política de Privacidade, entre em contato conosco através do e-mail <a
                        href="mailto:drawedutreimamentos@gmail.com?subject=Assunto da Mensagem&body=Corpo da Mensagem" className={styles.emailContact} title="Clique aqui e envie um email"><strong>drawedutreimamentos@gmail.com</strong></a></p><br />
                    <p>Agradecemos por escolher a DrawEdu como seu destino de aprendizado e estamos comprometidos em proteger sua privacidade e fornecer uma experiência educacional de alta qualidade. Esta Política de Privacidade visa garantir a segurança e a privacidade das suas informações pessoais.</p>
                </Fade>
            </div>
        </main>
    );
}

export default PoliticaPrivacidade;
