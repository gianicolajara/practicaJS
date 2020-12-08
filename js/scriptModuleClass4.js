export const primo = n => {
    if(n && typeof n === 'number' && n > 1){
        let count = 0;
        for(let i = 2; i <= n ; i++){
            if(n%i === 0){
                count += 1
                if(count > 1) break;
            }
        }
        if(count > 1)return 'No es primo'
        else return 'Es primo'

    }else return 'invalido'
}

export const imparPar = n => (n && typeof n === 'number')
                                ? (n%2===0) ? 'Par' : 'Impar'
                                : 'Invalido'

export const temp = (n, m) => ((n && typeof n === 'number') 
                                && (m && typeof m === 'string' 
                                && (m === 'C' || m === 'F')))
                                ? (m === 'C') ? (n * (9/5)) + 32 : (n - 32) * 5/9
                                : 'Invalido'
