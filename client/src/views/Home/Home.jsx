import Quoter from "../Quoter/Quoter"
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import styles from "./Home.module.css"
import dni from "../../Assets/dni.png"
import phono from "../../Assets/bank.png"
import bille from  "../../Assets/billetera.svg"
import reloj from "../../Assets/reloj.svg"
import billetes from  "../../Assets/billetess.svg";
import formulario from  "../../Assets/formulario.svg"

const Home = () => {
    return (
        <div>
            <NavBar />
            <div className={styles.content}>
                <div className={styles.fondo}></div> 
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>¡Préstamos al instante!</h1>
                    <h2 className={styles.paragraph}>Pedí efectivo 100% online, recíbelo en minutos y págalo en cuotas fijas</h2>
                    <Quoter />
                </div>
            </div>
            
            <div className={styles.contain_req}>
                <div className={styles.contain_req_title}>
                    <h1> Qué necesito? </h1>
                </div>

                <div className={styles.contain_req_div_phono}>
                    <img src={dni} className={styles.req_img1} alt="dni" width="120px"/>
                    <h4 className={styles.req_h4}> Ser mayor de 18 años y tener DNI Argentino </h4>
                </div>

                <div className={styles.contain_req_div_phono}>
                    <img src={phono} className={styles.req_img1} alt="phono" width="140px"/>
                    <h4 className={styles.req_h4}> Tener una cuenta de banco o billetera virtual a tu nombre </h4>
                </div>

                <div className={styles.contain_req_div_bille}>
                    <img src={bille} className={styles.req_img} alt="billetera" width="140px"/>
                    <h4 className={styles.req_h4}> Debés contar con una garantia para dejar en forma de empeño </h4>
                </div>

            </div>

            <div className={styles.contain_req}>
                <div className={styles.contain_req_title}>
                    <h1> Por qué elegirnos?</h1>
                </div>

                <div className={styles.contain_req_div_phono}>
                    <img src={reloj} className={styles.req_img2} alt="reloj" width="100px"/>
                    <h4 className={styles.req_h4}> Solicitud simple y rapida </h4>
                </div>

                <div className={styles.contain_req_div_phono}>
                    <img src={billetes} className={styles.req_img2} alt="billetes" width="125px"/>
                    <h4 className={styles.req_h4}> Acreditación inmediata </h4>
                </div>

                <div className={styles.contain_req_div_phono}>
                    <img src={formulario} className={styles.req_img} alt="formulario" width="100px"/>
                    <h4 className={styles.req_h4}> Excelente atención a nuestros clientes </h4>
                </div>

            </div>
            {/* <div className={styles.contain_dudas}>
                <h5>¿Tenés más dudas? <span> </span>
                <a href="https://wa.me/3765084215" style={{color: '#0a7447f3'}} target="_blank" rel="noopener noreferrer">Ingresa acá</a>
                </h5>
            </div> */}
            <Footer />
        </div>
    )
}
export default Home;

