import React from 'react';
import style from './Landing.module.css'
import NavBar from '../../Components/NavBar/NavBar';

function Landing() {

    return (   

        <div className={style.body}>
            <NavBar />
            <div className={style.container}>
                <h1 className={style.tittle} > Prestamos Personales </h1>
                
                <div className={style.text}>
                    <p> Obtén el préstamo que necesitas de manera rápida y sencilla. Entendemos que en ocasiones surgen gastos imprevistos o proyectos que requieren un impulso financiero. Es por eso que estamos aquí para ayudarte solventar tus gastos.  
                    <br/><br/>
                    No importa cuál sea tu situación crediticia, nosotros creemos en brindar oportunidades justas. Nuestro proceso de solicitud de préstamo es simple y sin complicaciones. Con solo unos pocos pasos, puedes tener acceso al dinero que necesitas para cubrir tus necesidades financieras. 
                    <br/><br/>
                     No pierdas tiempo y simula tu prestamo! </p>
                </div>

                <a href="/quoter" className={style.button}>COTIZADOR</a>
                
            </div> 
        </div>
    )
};

export default Landing;