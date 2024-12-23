import React, { useState, useEffect, useRef } from 'react';
import styles from './Quoter.module.css';
import { calcularTotalPagar } from './Helpers';

// const Button = ({ operador, fn }) => (
//   <button type="button" className={styles.button} onClick={fn}>
//     {operador}
//   </button>
// );

const Header = () => (
  <h1 className={styles.header}>
    ¿Cuánto necesitas?
      {/* <span className={styles.textIndigo}> 
        dinero
      </span> 
    necesitas? */}
  </h1>
);

const Quoter = () => {
  const [cantidad, setCantidad] = useState(250000);
  const [dias, setDias] = useState(6);
  const [total, setTotal] = useState(0);
  const MIN = 0;
  const MAX = 500000;
  const STEP = 1000;
  const inputRangeRef = useRef(null);
  const [renderizadoInicial, setRenderizadoInicial] = useState(true);

  const formatearDinero = (valor) => {
    const formatter = new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS', // Utiliza la moneda local
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,  
    });
    // Formatea el número y luego reemplaza el símbolo de pesos argentinos con el del dólar
    return formatter.format(valor).replace(/^ARS/, '$');
  };
  
  

  const updateBackground = (value = cantidad) => {
    const range = inputRangeRef.current;
    const percent = ((value - range.min) / (range.max - range.min)) * 100;
    // const gradient = `linear-gradient(to right, #0a7447f3 0%, #0a7447f3 ${percent}%, #d1d5db ${percent}%, #d1d5db 100%)`;
    const gradient = `linear-gradient(to right, #b8543b 0%, #ee6c4d ${percent}%, #d1d5db ${percent}%, #d1d5db 100%)`;
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

  const pagoMensual = total / dias;
  const mensajeWhatsApp = `Me interesa solicitar un préstamo de ${formatearDinero(cantidad)} para pagar en ${dias} ${dias === 15 || dias === 30 ? 'días' : 'meses'}.`;
  const numeroWhatsApp = '3765084215';
  const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensajeWhatsApp)}`;


  return (
    <div className={styles.body} >
        <div className={styles.quoterContainer}>            
        <Header />

        <div className={styles.buttonsContainer}>
            <p className={styles.totalAmount}>{formatearDinero(cantidad)}</p>
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

            <h2 className={styles.plazo}>
            Elige un <span className={styles.textIndigo}>Plazo</span> a pagar
            </h2>

            <select
            className={styles.selectPlazo}
            value={dias}
            onChange={(e) => setDias(Number(e.target.value))}
            >
            <option value=""> Plazos </option> 
            <option value="15">15 Días</option>
            <option value="30">30 Días</option>
            <option value="2">2 Meses</option>
            <option value="3">3 Meses</option>
            <option value="6">6 Meses</option>
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
        <div className={styles.container_button_contact}>
            <a href={urlWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button_contact}
            > Pedilo ahora! 
            </a>
        </div>
        </div>
    </div>
  );
};

export default Quoter;