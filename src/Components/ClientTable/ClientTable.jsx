import React, { useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import style from './ClientTable.module.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ReactComponent as Delete } from '../../Assets/x-square.svg';
import { ReactComponent as Edit } from '../../Assets/pen.svg';


function ClientTable({ clients, updateClientsList }) {
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [clientIdToDelete, setClientIdToDelete] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [editedClient, setEditedClient] = useState(null);

    function formatNumberWithCommas(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }

    const openConfirmationModal = (clientId) => {
        setClientIdToDelete(clientId);
        setShowConfirmation(true);
    };

    const closeConfirmationModal = () => {
        setShowConfirmation(false);
    };

    const handleCloseEdit = () => {
        setIsEditing(false);
        setEditedClient(null);
    };

    const handleEdit = (client) => {
        setEditedClient({
            id: client.id,
            nombre: client.nombre,
            garantia: client.garantia,
            cuotas: '',
            prestado: '',
            debe: '',
            mensual: '',
            ganancias: client.ganancias,
            intimacion: '',
            password: client.password
        });
        setIsEditing(true);
    };

    const saveEditedClient = async () => {
        try {
            if (editedClient && editedClient.id) {
                const { id, intimacion, prestado, debe, mensual, cuotas } = editedClient;
                const response = await axios.put(`http://localhost:3001/clients/update/${id}`, {
                    intimacion,
                    prestado,
                    debe,
                    mensual: mensual || null,
                    cuotas: cuotas || null
                });
                const updatedClients = clients.map(client =>
                    client.id === id ? { ...client, intimacion, prestado, debe, mensual, cuotas } : client
                );
                updateClientsList(updatedClients);
                setIsEditing(false);
                toast.success("Cliente actualizado correctamente.", { autoClose: 3000 });
            } else {
                console.error('Cliente editado no válido:', editedClient);
                toast.error('Cliente editado no válido. El ID del cliente es requerido.', { autoClose: 3000 });
            }
        } catch (error) {
            console.error('Error al actualizar el cliente:', error);
            toast.error('Error al actualizar el cliente', { autoClose: 3000 });
        }
    };

    const handleChangeIntimacion = (e) => {
        const inputValue = e.target.value;
        // Verifica si el valor ingresado tiene el formato DD-MM-YYYY
        const regex = /^(\d{1,2})-(\d{1,2})-(\d{4})$/;
        if (regex.test(inputValue)) {
            const [, day, month, year] = regex.exec(inputValue);
            const formattedDate = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
            setEditedClient({ ...editedClient, intimacion: formattedDate });
        } else {
            setEditedClient({ ...editedClient, intimacion: inputValue });
        }
    };

    const handleDelete = async (clientId) => {
        try {
            await axios.delete(`http://localhost:3001/clients/${clientId}`);
            const updatedClients = clients.filter(client => client.id !== clientId);
            updateClientsList(updatedClients);
            setShowConfirmation(false);
            toast.success("Cliente eliminado correctamente.", 
                { autoClose: 3000 },
            );
        } catch (error) {
            console.error('Error al borrar el cliente:', error);
            toast.error('Error al eliminar el cliente', 
                { autoClose: 3000 },
            );
        }
    };

    return (
        <div className={style.table_container}>
            <table>
                <thead>
                    <tr>
                        <th>NOMBRE</th>
                        <th>GARANTIA</th>
                        <th>CUOTAS</th>
                        <th>PRESTADO</th>
                        <th>DEBE</th>
                        <th>MENSUAL</th>
                        <th>GANANCIAS</th>
                        <th>INTIMACION</th>
                        <th>PASSWORD</th>
                        <th>ACCIONES</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(clients) && clients.map(client => (
                        <tr key={client.id}>
                            <td>{client.nombre}</td>
                            <td>{client.garantia}</td>
                            <td>{client.cuotas}</td>
                            <td>${formatNumberWithCommas(client.prestado)}</td>
                            <td>${formatNumberWithCommas(client.debe)}</td>
                            <td>{client.mensual !== null ? `$${formatNumberWithCommas(client.mensual)}` : '-'}</td>
                            <td>${formatNumberWithCommas(client.ganancias)}</td>
                            <td>{client.intimacion}</td>
                            <td>{client.password}</td>
                            <td>
                                <a className={style.delete_container}
                                onClick={() => openConfirmationModal(client.id)}>
                                    <Delete className={style.delete}  /> 
                                </a>

                                <a onClick={() => handleEdit(client)}>
                                    <Edit className={style.edit}  />
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
                        <button onClick={() => handleDelete(clientIdToDelete)}>Sí</button>
                        <button className="cancel" onClick={closeConfirmationModal}>Cancelar</button>
                    </div>
                </Modal>

                <Modal
                isOpen={isEditing}
                onRequestClose={handleCloseEdit}
                className={style.modal}
                overlayClassName={style.modal_overlay}
                >
                <h2>Editar Cliente</h2>
                {editedClient && (
                    <div>
                        <input
                            type="text"
                            placeholder='Coutas'
                            value={editedClient.cuotas}
                            onChange={e => setEditedClient({ ...editedClient, cuotas: e.target.value })}
                        />
                        <input
                            type="number"
                            placeholder='Prestado'
                            value={editedClient.prestado}
                            onChange={e => setEditedClient({ ...editedClient, prestado: e.target.value })}
                        />
                        <input
                            type="number"
                            placeholder='Debe'
                            value={editedClient.debe}
                            onChange={e => setEditedClient({ ...editedClient, debe: e.target.value })}
                        />
                        <input
                            type="text"
                            placeholder='Mensual'
                            value={editedClient.mensual}
                            onChange={e => setEditedClient({ ...editedClient, mensual: e.target.value })}
                        />
                        <input
                            className={style.modal_input_especial}
                            type="text"
                            placeholder='Intimacion'
                            value={editedClient.intimacion}
                            onChange={handleChangeIntimacion}
                        />
                        <br/>
                        <button onClick={saveEditedClient}>Guardar</button>
                        <button onClick={handleCloseEdit}>Cancelar</button>
                    </div>
                )}
            </Modal>
        </div>
    );
}

export default ClientTable;
