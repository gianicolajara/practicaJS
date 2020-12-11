export const elevar = n => {
    if(n && n instanceof Array && n.length > 0){
       for(let number of n){
           if(typeof number !== 'number') return `${number} no es un numero`
       }
       return n.map((v) => Math.pow(v,2))
    }else return 'invalido'  
}
                                

export const maxMin = n => {
    if(n && n instanceof Array && n.length > 0){
        for(let number of n)
            if(typeof number !== 'number') return `${number} no es un numero`
        
        return [Math.max(...n), Math.min(...n)]
    }else return 'invalido'      
}

export const parImpar = n => {
    if(n && n instanceof Array && n.length > 0){
        for(let number of n)
            if(typeof number !== 'number') return `${number} no es un numero`

        return {
            pares: n.filter((v) => v%2==0),
            impares: n.filter((v) => v%2!==0)
        }        
    }
}   