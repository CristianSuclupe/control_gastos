import ControlPresupueso from "./ControlPresupueso"
import NuevoPresupuesto from "./NuevoPresupuesto"


const Header = ({gastos, presupuesto, setPresupuesto, isValidPresupuesto, setIsValidPresupuesto}) => {
  return (
    <header>
        <h1>Planificador de gastos</h1>
        {isValidPresupuesto ? (
            <ControlPresupueso
              presupuesto={presupuesto}
              gastos={gastos}
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