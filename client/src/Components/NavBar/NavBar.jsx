import style from './NavBar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';




const NavBar = () => {

    return(

        <nav className={style.nav}>

            <div>
                <button className={style.button} >
                    <a style={{textDecoration: 'none', color: 'white'}} href='/about' >ABOUT</a>
                </button>


                
                <button className={style.buttonContact} >
                    <a href="https://wa.me/3765084215" style={{textDecoration: 'none', color: 'white'}} target="_blank" rel="noopener noreferrer" >
                    WHATSAPP
                    <FontAwesomeIcon icon={faWhatsapp} className={style.icon}/>
                    </a>
                </button>

            </div>
        </nav>
    )
}

export default NavBar;