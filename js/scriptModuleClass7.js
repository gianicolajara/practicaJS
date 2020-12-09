export const elevar = n => (n && n instanceof Array && n.length > 0)
                                ? n.map((v) => Math.pow(v,2))
                                : 'invalido'

export const maxMin = n => (n && n instanceof Array && n.length > 0)
                                ? [Math.max(...n), Math.min(...n)]
                                : 'invalido'

export const parImpar = n => {
    if(n && n instanceof Array && n.length > 0){
        const pares = [], impares = [];
        n.forEach((v) => (v%2===0) ? pares.push(v) : impares.push(v))
        return { pares, impares }
    }
}