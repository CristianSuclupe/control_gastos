import { useState, useEffect } from 'react';
import Mensaje from './Mensaje';
import CerrarBtn from '../img/cerrar.svg'


const Modal = ({setModal, animarModal, setAnimarModal, guardarGasto, gastoEditar, setGastoEditar}) => {

    const [mensaje, setMensaje] = useState('');
    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [categoria, setCategoria] = useState('');
    const [fecha, setFecha] = useState('');
    const [id, setId] = useState('');

    useEffect(() => {
        if( Object.keys(gastoEditar).length > 0 ){
            setNombre(gastoEditar.nombre);
            setCantidad(gastoEditar.cantidad);
            setCategoria(gastoEditar.categoria);
            setFecha(gastoEditar.fecha);
            setId(gastoEditar.id);     
        }      
    }, [gastoEditar])

    const ocultarModal = () => {
        setAnimarModal(false); 
        setTimeout(() => {
            setModal(false);
            setGastoEditar({});
        }, 300);
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if([cantidad, nombre, categoria].includes('')){
            setMensaje('Todos los campos son obligatorios');
            return;
        }
        setMensaje('');
        const gasto = {
            nombre,
            cantidad,
            categoria,
            fecha,
            id,
        }
        guardarGasto(gasto);
        ocultarModal();
    }

    return (
        <div className="modal">
            <div className="cerrar-modal">
                <img src={CerrarBtn} alt="cerrar modal" onClick={ocultarModal} />
            </div>
            <form 
                onSubmit={handleSubmit}
                className={`formulario ${animarModal ? "animar": "cerrar"}`}>
                <legend>{Object.keys(gastoEditar).length ? 'Editar Gasto' : 'Nuevo Gasto'}</legend>
                {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}
                <div className='campo'>
                    <label htmlFor="nombre">Nombre Gasto</label>
                    <input 
                        id='nombre'
                        type="text" 
                        placeholder='Añade el nombre del gasto'
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>
                <div className='campo'>
                    <label htmlFor="cantidad">Cantidad</label>
                    <input 
                        id='cantidad'
                        type="number" 
                        placeholder='Añade la cantidad del gasto: ejm 300'
                        value={cantidad}
                        onChange={(e) => setCantidad(Number(e.target.value))}
                    />
                </div>
                <div className='campo'>
                    <label htmlFor="categoria">Categoría</label>
                    <select
                        id='categoria'
                        value={categoria}
                        onChange={(e) => setCategoria(e.target.value)}
                    >
                        <option value="">-- Seleccione --</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="casa">Casa</option>
                        <option value="gastos">Gastos Varios</option>
                        <option value="ocio">Ocio</option>
                        <option value="salud">Salud</option>
                        <option value="suscripciones">Suscripciones</option>
                    </select>
                </div>
                <input 
                    type="submit"
                    value={Object.keys(gastoEditar).length ? 'Guardar Gastos' : 'Añadir Gasto'}
                />
            </form>
        </div>
    )
}

export default Modal