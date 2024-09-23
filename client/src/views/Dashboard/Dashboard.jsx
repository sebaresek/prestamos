import React, { useEffect, useState } from 'react';
import axios from 'axios';
import style from './Dashboard.module.css';
import ClientTable from '../../Components/ClientTable/ClientTable';
import StockProduct from '../../Components/StockProduct/StockProduct';
import DarkModeToggle from '../../Components/DarkModeToggle/DarkModeToggle';
import CardsCapital from '../../Components/CardsCapital/CardsCapital';
import SumSell from '../../Components/SumSell/SumSell';
import CardsCapitalStock from '../../Components/CardsCapitalStock/CardsCapitalStock';


function Dashboard() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [clients, setClients] = useState([]);
    const [products, setProducts] = useState([]);
    const [monthlyEarnings, setMonthlyEarnings] = useState(0);
    const [borrowedCapital, setBorrowedCapital] = useState(0);
    const [sumSell, setSumSell] = useState(0);

    const handleDarkModeToggle = (isDark) => {
        setIsDarkMode(isDark);
    };

    const updateClientsList = (updatedClients) => {
        setClients(updatedClients);
    };    

    const updateProductsList = (updatedProducts) => {
        setProducts(updatedProducts);
    }; 

    useEffect(() => {
        const fetchClients = async () => {
            try {
                const response = await axios.get('http://localhost:3001/clients/ordered/date');
                setClients(response.data);
            } catch (error) {
                console.error('Error al obtener los clientes:', error);
            }
        };

        const fetchMonthlyEarnings = async () => {
            try {
                const response = await axios.get('http://localhost:3001/clients/sum/monthly');
                console.log(response.data)
                setMonthlyEarnings(response.data['Profit Mensual: ']);
            } catch (error) {
                console.error('Error al obtener el Profit Mensual:', error);
            }
        };

        const fetchBorrowedCapital = async () => {
            try {
                const response = await axios.get('http://localhost:3001/clients/sum/monthly');
                // console.log(response.data)
                setBorrowedCapital(response.data['Capital Prestado: ']);
            } catch (error) {
                console.error('Error al obtener el Profit Mensual:', error);
            }
        };
        
            const fetchProducts = async () => {
                try {
                    const response = await axios.get('http://localhost:3001/products');
                    setProducts(response.data);
                } catch (error) {
                    console.error('Error al obtener los clientes:', error);
                }
            };

            const fetchSumSell = async () => {
                try {
                    const response = await axios.get('http://localhost:3001/products/sum/monthly');
                    setSumSell(response.data['Suma Ventas: ']);
                } catch (error) {
                    console.error('Error al obtener el Profit Mensual:', error);
                }
            };

        fetchSumSell();
        fetchClients();
        fetchProducts();
        fetchMonthlyEarnings();
        fetchBorrowedCapital();
    }, []); 

    const total = sumSell + borrowedCapital;

    return (   
        <div className={`${style.body} ${isDarkMode ? style.darkMode : style.lightMode}`}>
            <DarkModeToggle onToggle={handleDarkModeToggle} />
            <h1> PRESTAMOS PERSONALES 🏛️</h1>
            <div className={style.clientList}>

                <ClientTable 
                clients={clients}
                updateClientsList={updateClientsList} 
                /> 

                <div className={style.profitMensual}>
                    <CardsCapital 
                        title="Capital Prestado" 
                        percent="100%" 
                        data={borrowedCapital} 
                    />
                    
                    <CardsCapital 
                        title="Ganancia Mensual" 
                        percent="25%" 
                        data={monthlyEarnings} 
                    />

                    <CardsCapitalStock />
                </div>

                <div className={style.profitEnd}>

                    <StockProduct 
                        products={products}
                        updateProductsList={updateProductsList} 
                    /> 

                    <SumSell 
                        title="Stock en ventas" 
                        percent="17%" 
                        data={sumSell} 
                    />

                    <CardsCapital 
                        title="Capital total" 
                        percent="45%" 
                        data={total} 
                    />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
