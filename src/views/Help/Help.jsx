import React from 'react';
import styles from './Help.module.css'
import NavBar from '../../Components/NavBar/NavBar';
import Footer from '../../Components/Footer/Footer';

const Help = () => {
    return (
        <div>
            <NavBar/>
            <div className={styles.container}>
                <div className={styles.fondo}></div> 
                <div className={styles.textContainer}>
                    <h1 className={styles.title}> Página de Ayuda</h1>
                </div>
            </div>

            <div className={styles.container}>
                {/* <div className={styles.fondo_two}></div> <br /><br /> */}
                <section id="faq">
                    <h2 className={styles.title_two} >Preguntas Frecuentes </h2><br />
                        <p className={styles.text_two_margin}>
                            <strong>¿Qué son los préstamos prendarios?  </strong> 
                            Los préstamos prendarios son financiamientos que se otorgan mediante la garantía de un bien mueble, permitiendo al prestatario acceder a efectivo sin perder la posesión del bien.
                        </p><br />
                        <p className={styles.text_two_margin}>
                            <strong>¿Cómo solicito un préstamo?  </strong> 
                            Para solicitar un préstamo, debe contactarse con un asesor y adjuntar la documentación requerida.
                        </p><br />
                        <p className={styles.text_two_margin}>
                            <strong>¿Qué documentación necesito?  </strong> 
                            Se requiere: Documento de identidad, comprobantes de ingresos, documentación del bien a prendar, tener una cuenta de banco o billetera virtual a tu nombre
                        </p><br />
                        <p className={styles.text_two_margin}>
                            <strong>¿Cuáles son las tasas de interés?  </strong> 
                            Las tasas de interés varían según el monto y el plazo del préstamo. Para más información, contáctenos directamente.
                        </p><br />
                        <p className={styles.text_two_margin}>
                            <strong>¿Cuánto tiempo tarda la aprobación?  </strong> 
                            El tiempo de aprobación varía, pero generalmente se notificará a los solicitantes dentro de las 24 horas.
                        </p><br />
                        <p className={styles.text_two_margin}>
                            <strong>¿Puedo pagar mi préstamo anticipadamente?  </strong> 
                            Sí, usted puede pagar su préstamo anticipadamente. Consulte las condiciones específicas en su contrato.
                        </p><br />
                        <p className={styles.text_two_margin}>
                            <strong>¿Qué sucede si no puedo pagar mi préstamo?  </strong> 
                            Si enfrenta dificultades para realizar su pago, contáctenos de inmediato para discutir sus opciones y evitar penalidades.
                        </p><br />
                </section>
            </div>
            
            <div className={styles.container}>
                    <section id="privacidad">
                        <h2 className={styles.title_two}>Política de Privacidad</h2>
                        <p className={styles.text_two}>
                            La presente Política de Privacidad establece los términos en que InvertLend utiliza y protege la información que es proporcionada por sus usuarios al momento de utilizar su página web. Nos comprometemos a garantizar la protección de la privacidad de nuestros usuarios. Si solicitamos información personal identificable, se asegurará que solo se utilizará de acuerdo con esta declaración de privacidad.
                            <br/><br/>
                            Recopilamos la siguiente información personal: nombre y apellido, domicilio, teléfono e información sobre la solicitud de préstamo.
                            <br/><br/>
                            La información que recopilamos es utilizada para procesar solicitudes de préstamo, comunicarnos con los usuarios para brindar información y asistencia.
                        </p>
                    </section>
            </div>
            {/* <br/> */}
            <div className={styles.container}>
                <section id="terminos">
                    <h2 className={styles.title_two}> Términos y Condiciones</h2>
                    <p className={styles.text_two_margin}>
                        Al utilizar los servicios de InvertLend, usted acepta cumplir con los siguientes términos y condiciones. Si no está de acuerdo con alguno de ellos, no debe utilizar nuestros servicios.
                    </p><br/>
                    <h3 className={styles.subtitle_two}>Descripción de servicios</h3>
                    <p className={styles.text_two_margin}>
                        InvertLend ofrece préstamos prendarios que permiten a los usuarios obtener financiamiento mediante la garantía de un bien mueble.
                    </p>
                    <br />
                    <h3 className={styles.subtitle_two} >Requisitos para solicitar un préstamo</h3>
                    <p className={styles.text_two_margin}>Para solicitar un préstamo, se requiere la siguiente documentación:
                     <br />
                       - Documento de identidad.<br/>
                       - Comprobantes de ingresos.<br/>
                       - Documentación del bien a prendar.<br/>
                       - Tener una cuenta de banco o billetera virtual a tu nombre
                    </p>
                    <br />
                    <h3 className={styles.subtitle_two}>Obligaciones del usuario</h3>
                    <p className={styles.text_two_margin}>
                        El usuario se compromete a proporcionar información actualizada al momento de la solicitud. También es responsable de mantener la confidencialidad de su información de acceso.
                    </p><br />
                    <h3 className={styles.subtitle_two}>Limitación de responsabilidad</h3>
                    <p className={styles.text_two_margin}>
                        InvertLend no se hace responsable por daños o pérdidas resultantes de la utilización de sus servicios, salvo en casos de dolo o negligencia grave.
                    </p><br />
                    <h3 className={styles.subtitle_two}>Modificaciones</h3>
                    <p className={styles.text_two_margin}>
                        Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Los cambios serán efectivos a partir de su publicación en esta página.
                    </p><br /><br /><br />
                </section>
            </div>
            <Footer/>
        </div>
    );
};

export default Help;
