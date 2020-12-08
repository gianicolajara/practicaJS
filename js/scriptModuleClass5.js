export const binarioDecimal = (n,b) => ((n && typeof n === 'number') 
                                        && (b && typeof b === 'number' 
                                        && (b === 2 || b === 10)))
                                            ? (b === 2) ? parseInt(n, b) : n.toString(2)
                                            : 'invalido';
                            
export const descuento = (n, d) => ((n && typeof n === 'number') 
                                    && (d && typeof d === 'number' 
                                    && (d > 0 && d <= 100)))
                                    ? n - (n*(d/100))
                                    : 'invalido'

export const fecha = a => {
    if(a && a instanceof Date) { 
        const aniosPasados = a.getFullYear(),
        anios = aniosPasados - new Date().getFullYear();
        return (Math.sign(anios) === -1)                                                        
            ? `Han pasado ${Math.abs(anios)} años desde ${aniosPasados}`
            : `Faltan ${Math.abs(anios)} para llegar a ${aniosPasados} años`
    }else return 'invalido'
}
