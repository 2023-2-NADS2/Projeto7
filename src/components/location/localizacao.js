import React from 'react';
import styles from './localizacao.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap } from '@fortawesome/free-regular-svg-icons';

function Localizacao() {
    return (
        <main>
            <div className={styles.mainLocation}>
                <h1>Localização</h1>
            </div>
            <div className={styles.locationContein}>
                <i><FontAwesomeIcon icon={faMap} className={styles.Marker} /></i>
                <p>Rua Quinze de Novembro, 295 - Centro - Goiana - PE</p><br />
            </div>
            <div className={styles.locationMaps}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.1639521640054!2d-34.999076800000005!3d-7.557095499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab62866ba9c8e7%3A0x4809b83177b1c6a8!2sR.%20Quinze%20de%20Novembro%2C%20295%20-%20Centro%2C%20Goiana%20-%20PE%2C%2055900-000!5e0!3m2!1spt-BR!2sbr!4v1699438695885!5m2!1spt-BR!2sbr"
                    width="600" height="450" style={{ border: "0" }} allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </main>
    );
}

export default Localizacao;
