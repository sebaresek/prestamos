import React from 'react';
import styles from './Footer.module.css';
import logo from "../../Assets/InvertLend.png"
import pesos from "../../Assets/pesos.png"
import { FcPhone, FcInvite, FcFeedback,FcMoneyTransfer    } from "react-icons/fc";

const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.footerSection}>
                <h4>Ayuda</h4>
                <a href="/help#privacidad">
                    <p>
                        Política de Privacidad
                    </p>
                </a>
                <a href="/help#terminos">
                    <p>
                        Términos y Condiciones
                    </p>
                </a>
                <a href="/help#faq">
                    <p>
                        Preguntas Frecuentes
                    </p>
                </a>
            </div>
            <div className={styles.footerSection}>
                <h4>Contactános</h4>
                <p style={{ marginTop: '3px'}}>
                    <FcPhone style={{ fontSize: '22px', marginRight: '2px' }} />
                     +543765084215
                </p>
                <p style={{ marginTop: '1px'}}>
                    <FcMoneyTransfer  style={{ fontSize: '22px', marginRight: '7px' }} />
                    sebaresekk@gmail.com
                </p>
            </div>
            <div className={styles.footerSection_logo}>
                <a href="/" className={styles.nav_logo_i}>
                    <img src={pesos} width="23px" 
                    className={styles.nav_logo_i_s}/>
                    <img src={logo} alt="logo" width="230px"/>
                </a>
            </div>
            <div className={styles.footerBottom}>
                <p>Copyright  InvertLend 2024. Todos los derechos reservados.</p>
            </div>
        </div>
    );
};

export default Footer;