export const randomNumber = () => Math.floor(Math.random() * (600-501) + 501)

export const capicua = n => {
    return (n && typeof n === 'number' && n > 0)
        ? n.toString() === n.toString().split('').reverse().join('')
        : 'invalido'
}

export const factorial = n => {
    if(n && typeof n === 'number' && n > 0){
        let fac = 1;
        for(let i = 1; i <= n; i++) fac *= i;
        return fac;
    } else{
        return 'invalido'
    }
}
