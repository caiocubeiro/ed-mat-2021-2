

function fatorial(n){
    let resultado = 1
    for(let i = n; i > 1; i--) resultado *= i
    return resultado
}

console.log(fatorial(5))

function fatorialRec(n){
    if(n <= 1) return 1
    return n * fatorialRec(n - 1)
}

console.log('Fatorial (recursivo) de 5:', fatorialRec(5))