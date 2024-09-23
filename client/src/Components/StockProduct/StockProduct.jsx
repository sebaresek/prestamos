import React, { useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import style from './StockProduct.module.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ReactComponent as Delete } from '../../Assets/x-square.svg';


function StockProduct({ products, updateProductsList }) {
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [productIdToDelete, setProductIdToDelete] = useState(null);

    function formatNumberWithCommas(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }

    const openConfirmationModal = (productsId) => {
        setProductIdToDelete(productsId);
        setShowConfirmation(true);
    };

    const closeConfirmationModal = () => {
        setShowConfirmation(false);
    };


    const handleDelete = async (productsId) => {
        try {
            await axios.delete(`http://localhost:3001/products/${productsId}`);
            const updatedProducts = products.filter(products => products.id !== productsId);
            updateProductsList(updatedProducts);
            setShowConfirmation(false);
            toast.success("Producto eliminado correctamente.", 
                { autoClose: 3000 },
            );
        } catch (error) {
            console.error('Error al borrar el producto:', error);
            toast.error('Error al eliminar el producto', 
                { autoClose: 3000 },
            );
        }
    };

    return (
        <div className={style.table_container}>
            <table>
                <thead>
                    <tr>
                        <th>PRODUCTO</th>
                        <th>PRECIO</th>
                        <th>ACCIONES</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(products) && products.map(products => (
                        <tr key={products.id}>
                            <td>{products.nombre}</td>
                            <td>${formatNumberWithCommas(products.precio)}</td>
                            <td>
                                <a className={style.delete_container}
                                onClick={() => openConfirmationModal(products.id)}>
                                    <Delete className={style.delete}  /> 
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Modal
                    isOpen={showConfirmation}
                    onRequestClose={closeConfirmationModal}
                    className={style.modal}
                    overlayClassName={style.modal_overlay}
                >
                    <p>¿Estás seguro de que deseas eliminar este cliente?</p>
                    <div className={style.modal_buttons}>
                        <button onClick={() => handleDelete(productIdToDelete)}>Sí</button>
                        <button className="cancel" onClick={closeConfirmationModal}>Cancelar</button>
                    </div>
                </Modal>
        </div>
    );
}

export default StockProduct;
