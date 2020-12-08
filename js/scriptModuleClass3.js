export const randomNumber = () => Math.floor(Math.random() * (600-501) + 501)

export const capicua = n => {
    return (n && Number.isInteger(n) && n > 0)
        ? n === parseInt(n.toString().split('').reverse().join(''))
        : 'invalido'
}

export const factorial = n => {
    if(n && Number.isInteger(n) && n > 0){
        let fac = 1;
        for(let i = 1; i <= n; i++) fac *= i;
        return fac;
    }
}