import React, { useState, useEffect, useRef } from 'react';
import styles from './Quoter.module.css';
import { calcularTotalPagar } from './Helpers';
import fondo from '../../Assets/landing.jpg'
import NavBar from '../../Components/NavBar/NavBar';

const Button = ({ operador, fn }) => (
  <button type="button" className={styles.button} onClick={fn}>
    {operador}
  </button>
);

const Header = () => (
  <h1 className={styles.header}>
    ¿Cuánto <span className={styles.textIndigo}>dinero</span> necesitas?
  </h1>
);

const Quoter = () => {
  const [cantidad, setCantidad] = useState(25000);
  const [dias, setDias] = useState(6);
  const [total, setTotal] = useState(0);
  const MIN = 0;
  const MAX = 50000;
  const STEP = 1000;
  const inputRangeRef = useRef(null);
  const [renderizadoInicial, setRenderizadoInicial] = useState(true);

  const formatearDinero = (valor) => {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    return formatter.format(valor);
  };

  const updateBackground = (value = cantidad) => {
    const range = inputRangeRef.current;
    const percent = ((value - range.min) / (range.max - range.min)) * 100;
    const gradient = `linear-gradient(to right, #84cc16 0%, #84cc16 ${percent}%, #d1d5db ${percent}%, #d1d5db 100%)`;
    range.style.background = gradient;
  };


  useEffect(() => {
    updateBackground();
  });  
  

  useEffect(() => {
    setTotal(calcularTotalPagar(cantidad, dias));
  }, [cantidad, dias]);

  useEffect(() => {
    if (renderizadoInicial) {
      setTotal(0);
    }
    setRenderizadoInicial(false);
  }, [renderizadoInicial]);
  

  const handleChangeDecremento = () => {
    const valor = cantidad - STEP;
    if (valor < MIN) {
      alert('Cantidad no válida');
      return;
    }
    setCantidad(valor);
    updateBackground(valor);
  };

  const handleChangeIncremento = () => {
    const valor = cantidad + STEP;
    if (valor > MAX) {
      alert('Cantidad no válida');
      return;
    }
    setCantidad(valor);
    updateBackground(valor);
  };

  const pagoMensual = total / dias;

  return (


    <div className={styles.body} >
        <NavBar />
        <div className={styles.quoterContainer}>
            
            <img src={fondo} className={styles.fondo} alt="fondo" />
            
        <Header />

        <div className={styles.buttonsContainer}>
            <Button operador="-" fn={handleChangeDecremento} />
            <Button operador="+" fn={handleChangeIncremento} />
        </div>

        <div className={styles.inputContainer}>
            <input
            type="range"
            className={styles.inputRange}
            min={MIN}
            max={MAX}
            step={STEP}
            value={cantidad}
            onChange={(e) => {
                setCantidad(parseInt(e.target.value));
                updateBackground(parseInt(e.target.value));
            }}
            ref={inputRangeRef}
            />

            <p className={styles.totalAmount}>{formatearDinero(cantidad)}</p>

            <h2 className={styles.plazo}>
            Elige un <span className={styles.textIndigo}>Plazo</span> a pagar
            </h2>

            <select
            className={styles.selectPlazo}
            value={dias}
            onChange={(e) => setDias(Number(e.target.value))}
            >
            <option value="1"> Plazos </option> 
            <option value="15">15 Días</option>
            <option value="30">30 Días</option>
            <option value="3">3 Meses</option>
            {/* <option value="6">6 Meses</option> */}
            </select>
        </div>

        {total > 0 ? (
            <div className={styles.paymentSummary}>
            <h2 className={styles.paymentSummaryTitle}>
                Resumen <span className={styles.textIndigo}>de pagos</span>
            </h2>

            <p className={styles.paymentSummaryTotal}>
                {dias === 90 ? 'Total a pagar:' : 'Total:'} {formatearDinero(total)} ARS
            </p>

            {dias === 15 || dias === 30 ? (
                <p className={styles.paymentSummarySinglePayment}>En un solo pago!</p>
            ) : (
                <p className={styles.paymentSummaryMonthlyPayment}>
                Pagos Mensuales de: {formatearDinero(pagoMensual)} ARS
                </p>
            )}
            </div>
        ) : (
            <div className={styles.paymentSummary}>
            <h2 className={styles.paymentSummaryTitle}>
                Resumen <span className={styles.textIndigo}>de pagos</span>
            </h2>

            <p className={styles.paymentSummaryTotal}>Total: -------- </p>

            <p className={styles.paymentSummaryMonthlyPayment}>Pagos Mensuales de: -------- </p>
            </div>
        )}
        </div>
    </div>
  );
};

export default Quoter;