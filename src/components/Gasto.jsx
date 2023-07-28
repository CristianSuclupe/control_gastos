
const Gasto = ({gasto}) => {
    const {nombre, categoria, cantidad, id} = gasto;
    return (
        <div className="gasto sombra">
            <div className="contenido-gasto">
                <div className="descripcion-gasto">
                    <p className="categoria">{gasto.categoria}</p>
                    <p className="nombre-gasto">{gasto.nombre}</p>
                </div>
            </div>
        </div>
    )
}

export default Gasto