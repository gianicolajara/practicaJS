export const revertirPalabra = p => (p && typeof p === 'string' && p.length > 0)
                                        ? p.split('').reverse().join('')
                                        : 'Invalido'

export const contarPalabras = (p, b) => {
    let reg = null;
    return ((p && typeof p === 'string' && p.length > 0) && (b && typeof b === 'string' && b.length > 0))
        ? (
            reg = RegExp(`${b}`, 'g'),
            p.match(reg).length
        ) :(
            'invalido'
        )
}

export const palindromo = p => {
  let newP = null;
    return (p && typeof p === 'string' && p.length > 0) 
        ?
            (
            newP = p.normalize('NFD').replace(/[\u0300-\u036f,. ]/g, "").toLowerCase(),
            newP === newP.split('').reverse().join('')
            )
        : 'invalido'
}

export const eliminarPalabra = (p, l) => {
    let reg = null;
    return ((p && typeof p === 'string' && p.length > 0) && (l && p.length > 0))
        ? (
            reg = RegExp(`${l}`, 'g'),
            p.replace(reg, "")
        ): 'invalido'
}
