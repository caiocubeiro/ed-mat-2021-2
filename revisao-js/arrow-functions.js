//Funçao tradicional com 1 parametro e 1 linha no corpo com return

function quadrado(x){
    return x * x
}

console.log(quadrado(7))

console.log("================")

//Arrow function: forma abreviada de escrever funções

// A função é atribuida a uma variavel(ou ainda melhor uma constante)
// Não se escreve a palavra chave "function" 
// Não se escreve os parenteses em torno dos parametros
// O sinal de flecha "=>" entra entre o parametro e ao corpor da função
// Não se escreve as chaves e não há necessidade de escrever "return"
const quadrado2 = x => x * x

console.log(quadrado2(8))

console.log("================")

//Função tradicional com 2 parametros
function potencia(base, expoente){
    return base ** expoente
}

console.log(potencia(2,5))

console.log("================")

// Arrow function com 2 parametros 
// Os parenteses dos parametros retorna a sintaxe
const potencia2 = (base, expoente) => base ** expoente

console.log(potencia2(3,4))

console.log("================")

//Função tradicional sem parametros

function dataHoraAtual(){
    return new Date()
}

//Função arrow sem parametros
//Retornar os parenteses para simbolizar nenhum parametro

const dataHoraAtual2 = () => new Date()

console.log(dataHoraAtual())
console.log(dataHoraAtual2())

console.log("================")

//Função tradicional com mais de 1 linha
function fatorial(n){
    let res = 1
    for(let i = n; i > 1; i--) res *= i
    return res
}

//Função arrow correspondente
const fatorial2 = n =>{ 
    let res = 1
    for(let i = n; i > 1; i--) res *= i
    return res
}

console.log(fatorial(5))
console.log(fatorial2(5))

console.log("================")