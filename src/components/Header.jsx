import ControlPresupueso from "./ControlPresupueso"
import NuevoPresupuesto from "./NuevoPresupuesto"


const Header = ({gastos, setGastos, presupuesto, setPresupuesto, isValidPresupuesto, setIsValidPresupuesto}) => {
  return (
    <header>
        <h1>Planificador de gastos</h1>
        {isValidPresupuesto ? (
            <ControlPresupueso
              presupuesto={presupuesto}
              setPresupuesto={setPresupuesto}
              gastos={gastos}
              setGastos={setGastos}
              setIsValidPresupuesto={setIsValidPresupuesto}
            />
        ) : (
            <NuevoPresupuesto
                presupuesto={presupuesto}
                setPresupuesto={setPresupuesto}
                setIsValidPresupuesto={setIsValidPresupuesto}
            />
        ) }
        
    </header>
  )
}

export default Header