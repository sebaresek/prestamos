import React from 'react';
import style from './Landing.module.css'
import NavBar from '../../Components/NavBar/NavBar';
import Quoter from '../Quoter/Quoter';

function Landing() {

    return (   
        <div className={style.body}>
            <NavBar />
                <div className={style.container}>
                    <h2 className={style.tittle}>Préstamos
                        <br/>
                    al Instante! </h2>
                    <div className={style.content}>
                        <p className={style.text}>
                        Pedí efectivo 100% online, recíbelo en minutos y págalo en cuotas fijas
                        </p>
                    </div>
                </div> 
                <div className={style.quoter}>
                    <Quoter />
                </div>
        </div>
    );
};

export default Landing;