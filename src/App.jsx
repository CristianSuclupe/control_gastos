import { useState, useEffect } from 'react'
import Header from './components/Header';
import Modal from './components/Modal';
import ListadoGastos from './components/ListadoGastos';
import { generarID } from './helpers';
import IconoNuevoGasto from './img/nuevo-gasto.svg';



function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);
  const [gastos, setGastos] = useState([]);
  const [gastoEditar, setGastoEditar] = useState({});

  useEffect(() => {
    if( Object.keys(gastoEditar).length > 0 ){
      fAnimarModal();
    }
  }, [gastoEditar])

  const handleNuevoGasto = () => {
    setGastoEditar({});
    fAnimarModal();
  }

  const fAnimarModal = () => {
    setModal(true);
    setTimeout(() => {
      setAnimarModal(true);
    }, 200);
  }

  const guardarGasto = (gasto) => {
    if(gasto.id){
      const gastoActualiazar = gastos.map( gastoState => gastoState.id === gasto.id ? gasto : gastoState);
      setGastos(gastoActualiazar);
    }
    else {
      gasto.id = generarID();
      gasto.fecha = Date.now();
      setGastos([...gastos, gasto]);
    }
  }

  const eliminarGasto = (id) => {
    const gastosFiltrados = gastos.filter(gasto => gasto.id !== id);
    setGastos(gastosFiltrados);
    
  }
  return (
    <div className={modal ? 'fijar' : ''}>
      <Header
        gastos={gastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />
      {isValidPresupuesto && (
        <>
          <main>
            <ListadoGastos 
              gastos={gastos}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
            />
          </main>
          <div className='nuevo-gasto'>
            <img src={IconoNuevoGasto} alt="icono nuevo gasto" onClick={handleNuevoGasto}/>
          </div>
        </>
      )}
      {modal && 
        <Modal 
          setModal={setModal}
          animarModal={animarModal}
          setAnimarModal={setAnimarModal}
          guardarGasto={guardarGasto}
          gastoEditar={gastoEditar}
          setGastoEditar={setGastoEditar}
        />}
    </div>
    
  )
}

export default App
