import React, { useEffect } from 'react';
import styles from '../../styles/Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';

function Header() {
  useEffect(() => {
    const hamburguer = document.querySelector(`.${styles.hamburguerMenu}`);

    if (hamburguer) {
      function toggleMenu(event) {
        if (event.type === 'touchstart') event.preventDefault();

        const nav = document.querySelector(`.${styles.nav}`);
        nav.classList.toggle(`${styles.active}`);

        const active = nav.classList.contains(`${styles.active}`);
        event.currentTarget.setAttribute('aria-expanded', active);

        if (active) {
          event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
        } else {
          event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
        }
      }

      hamburguer.addEventListener('click', toggleMenu);
      hamburguer.addEventListener('touchstart', toggleMenu);

      return () => {
        hamburguer.removeEventListener('click', toggleMenu);
        hamburguer.removeEventListener('touchstart', toggleMenu);
      };
    }
  }, []);
  return (
    <header>
      <nav className={styles.nav}>
        <div className={styles.containerNav}>
          <a href="/#"><img className={styles.imgLogo} src="imagens/img-logo.png" alt="Imagem do logo da DrawEdu" title="Home" /></a>
          <span role="button" aria-label='Abrir Menu' className={styles.hamburguerMenu} aria-haspopup='true' aria-expanded="false"></span>
          <div className={styles.navMenu}>
            <ul className={styles.menuItems}>
              <li><a href="/sobre" title="Sobre nós">Sobre nós</a></li>
              <li><a href="/cursos" title="Cursos">Cursos</a></li>
              <li><a href="/treinamento" title="Treinamento">Treinamento</a></li>
              <li><a href="/oficina" title="Oficina">Oficina</a></li>
              <li><a href="#" title="Produto" className={styles.produtoIcon}>Produto<i><FontAwesomeIcon icon={faChevronDown} /></i></a>
                <ul className={styles.dropdownProduto}>
                  <li className={styles.down}><a href="/produto">Massinha Condutora</a></li>
                  <li className={styles.down2}><a href="/fasciculo-2">Práticas em Robótica Educacional</a></li>
                </ul>
              </li>
              <li className='inscrevase'>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSf9YYe6LXalMaHzSEp32YC2rMyhFylnyBAwsncF9Dsqjlqmog/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer" title="Inscreva-se" className={styles.buttonInscreva}>
                  <strong>Inscreva-se</strong>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
