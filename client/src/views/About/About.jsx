import React from "react";
import styles from "./About.module.css";
import fondo from '../../Assets/landing.jpg'
import NavBar from '../../Components/NavBar/NavBar'


const About = () => {
  

  
  return (
    <div className={styles.body}>
        <NavBar/>
         {/* <img src={fondo} className={styles.fondo} alt="fondo" /> */}
        <div className={styles.container}>
            <h1 className={styles.title}>Un poco sobre nosotros</h1>
                <p className={styles.text}>
                    Bienvenido a nuestro sitio de préstamos personales. A nosotros nos apasiona ayudar a las personas a alcanzar sus metas financieras y superar cualquier obstáculo que se les presente en el camino.
                    <br/><br/>
                    Sabemos que la vida está llena de imprevistos y gastos inesperados, y en ocasiones todos necesitamos un poco de ayuda financiera para hacer frente a esas situaciones. Es ahí donde entramos nosotros. Nuestro objetivo es brindarte soluciones financieras flexibles y accesibles que se adapten a tus necesidades únicas.
                    <br/><br/>
                    Nos enorgullece ofrecer un proceso simple y transparente, sin complicaciones ni sorpresas desagradables. Valoramos la confianza que depositas en nosotros y nos esforzamos por brindarte un servicio excepcional.
                    <br/><br/>
                    Nuestra misión es proporcionarte préstamos personales con tasas de interés competitivas y plazos flexibles. Queremos que te sientas respaldado y seguro al tomar decisiones financieras importantes. Ya sea que necesites dinero para cubrir gastos médicos, consolidar deudas o hacer realidad tus sueños, estamos aquí para ayudarte a lograrlo.
                    <br/><br/>
                    Gracias por considerarnos como tu opción para obtener préstamos personales. Si tienes alguna pregunta o necesitas asistencia, no dudes en contactarnos. Estamos aquí para ti.
                    <br/><br/>
                    ¡Estamos emocionados por ayudarte en cada paso para salir adelante!
                </p>

                <button className={styles.button} >
                    <a style={{textDecoration: 'none', color: 'white'}} href='/' >HOME</a>
                </button>
        </div>
    </div>
  );
};

export default About;
