import style from './NavBar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import money from '../../Assets/logoo.png';




const NavBar = () => {
    return(
        <nav className={style.nav}>
            <img src={money} className={style.nav_money} width="90px"/>

            {/* <button className={style.button}>
                <a style={{textDecoration: 'none', color: '#3b3b3b'}} href='/about'>ABOUT</a>
            </button> */}

            <button className={style.buttonContact}>
                <a href="https://wa.me/3765084215" style={{textDecoration: 'none', color: 'white'}} target="_blank" rel="noopener noreferrer">
                    WHATSAPP
                    <FontAwesomeIcon icon={faWhatsapp}  className={style.icon}/>
                </a>
            </button>
        </nav>
    );
}

export default NavBar;
