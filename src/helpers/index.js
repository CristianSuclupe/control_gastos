export const generarID = () => {
    const random = Math.random().toString(36).slice(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
}