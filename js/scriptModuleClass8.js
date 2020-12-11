export const primeraFuncion = n =>{
    if(n && n instanceof Array && n.length > 0){
        for(let number of n) if(typeof number !== 'number') return `${number} no es un numero`
        n = n.filter((v,i,a) => a.indexOf(v, i+1) < 0)
        return {
            asc: n.map(v => v).sort((a,b) => a - b),
            desc: n.map(v => v).sort((a,b) => b - a)
        }
    }else return 'invalido'
}

export const eliminarDuplicados = n => (n && n instanceof Array && n.length > 1)
                                            ? [... new Set(n)]
                                            : 'invalido'

export const promediar = n => {
    if(n && n instanceof Array && n.length > 1){
        for(let number of n) if(typeof number !== 'number') return `${number} no es un numero`
        return n.reduce((pv, cv) => pv+cv)/n.length
    }else return 'invalido'
}