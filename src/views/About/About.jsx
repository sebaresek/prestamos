import React from "react";
import styles from "./About.module.css";
import NavBar from '../../Components/NavBar/NavBar'
import Footer from '../../Components/Footer/Footer'


const About = () => {
  

  
  return (
    <div>
        <NavBar/>
            <div className={styles.container}>
                <div className={styles.fondo}></div> 
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>Nosotros</h1>
                    <p className={styles.text}>Tu solución financiera sin complicaciones ni letra pequeña.</p>
                    <div className={styles.fondo_dinero}></div> 
                </div>
            </div>
             
            <div className={styles.container}>
              <div className={styles.title_two}>
                <h2>Somos una empresa Financiera</h2>
                </div>
                  <p className={styles.text_two}>A nosotros nos apasiona ayudar a las personas a alcanzar sus metas financieras y superar cualquier obstáculo que se les presente en el camino.
                  Nos enorgullece ofrecer un proceso simple y transparente, sin complicaciones ni sorpresas desagradables. 
                  <br />
                  Valoramos la confianza que depositas en nosotros y nos esforzamos por brindarte un servicio excepcional.
                  <br/><br/></p>
              </div>


              <div className={styles.container}>
                <div className={styles.fondo_two}></div> 
                <div className={styles.textContainer_three}>
                    <h2 className={styles.title_three}>Nuestra Misión</h2>
                    <p className={styles.text_three}>Es proporcionarte préstamos personales con tasas de interés competitivas y plazos flexibles. Queremos que te sientas respaldado y seguro al tomar decisiones financieras importantes. Ya sea que necesites dinero para cubrir gastos médicos, consolidar deudas o hacer realidad tus sueños, estamos aquí para ayudarte a lograrlo.
                    <br/><br/>
                    Gracias por considerarnos como tu opción para obtener préstamos personales. Si tienes alguna pregunta o necesitas asistencia, no dudes en contactarnos. Estamos aquí para ti.</p>
                    <div className={styles.fondo_manos}></div> 
                </div>
            </div>
            <Footer/>
        </div>
  );
};

export default About;
