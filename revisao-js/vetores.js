let frutas = ['laranja' , 'maça', 'banana', 'melancia']

// push acrescenta após
console.log('//---------//')
console.log('//- Acrescenta morango na ultima posição --//')
console.log('//---------//')
frutas.push('morango')

console.log(frutas)

// unshift acrescenta antes
frutas.unshift('maracuja')

console.log('//---------//')
console.log('//- Acrescenta maracuja na primeira posição --//')
console.log('//---------//')

console.log(frutas)

// splice acrescenta aonde tiver a referencia
// parametros:
// splice(start: number, deleteCount?: number):
frutas.splice(3, 0, 'mamao')

console.log('//---------//')
console.log('//- Acrescente mamao na posição 3--//')
console.log('//---------//')

console.log(frutas)

// pop retira o ultimo elemento do vetor
let ultimo = frutas.pop()
console.log('//---------//')
console.log('//- Retirando p ultimo elemento--//')
console.log('//---------//')

console.log(ultimo, frutas)

// shifit retira o primeiro elemento do vetor
let primeiro = frutas.shift()
console.log('//---------//')
console.log('//- Retirando o primeiro elemento--//')
console.log('//---------//')

console.log(primeiro, frutas)

// splice retira a qtd de posisições detemrinados pelo parametro 2 selecionado no parametro 1
let intermed = frutas.splice(3, 1)
console.log('//---------//')
console.log('//- Retirando elemento 3--//')
console.log('//---------//')

console.log(intermed, frutas)

// acrescente qualquer qtd de elementos
frutas.push('jabuticaba', 'abacaxi', 'amora' , 'abacate')
console.log('//---------//')
console.log(frutas)

console.log('//---------//')
console.log('//---------//')
console.log('//---------//')

// mostra o vetor de elemento a elemento
for(let i = 0; i < frutas.length; i++){
    console.log(frutas[i])
}

console.log('//---------//')

// mostra o vetor de elemento a elemento ao contrario
for(let i = frutas.length - 1; i >= 0; i--){
    console.log(frutas[i])
}

console.log('//---------//')

for( let f of frutas){
 console.log(f)
}