
//Criação de objeto
//let objeto1 = new Object{} // forma tradiocional 
let objeto2 = {} // forma moderna

let pessoas = {
    nome: 'Jurandir Junqueira',
    sexo: 'M',
    dataNasc: '2000-09-18',
    ocupacao: 'estudante',

    // Quando a propriedade contem espaço ou caracter especial deve ser descrita assim:
    'cidade de origem': ' Franca/SP',
    'série': '3ºC',
    gostos: ['jogar', 'comer doces', 'dormir']

}

console.log(pessoas)

console.log(pessoas.sexo)

console.log('=========================')

//------------------//

let props = ['sexo', 'nome', 'dataNasc', 'ocupacao']

for(let p of props){
    console.log(pessoas[p])
}

console.log('=========================')

let x = 'dataNasc'
console.log(pessoas[x])

console.log('=========================')

pessoas.email = 'juracirj@gmail.com'
pessoas['telefone contato'] ='16 99999-8888'

console.log(pessoas)

console.log('=========================')

let carro = {}

carro.modelo = 'Volkswagen'
carro.marca = 'Fusca'
carro.cor = 'Preto'
carro.ano = '1969'
carro['nome proprietário'] = 'Juscelina Jordão'

console.log(carro)

console.log('=========================')
console.log('Exibindo nomes das propriedades do objeto "pessoa":')

// Para descobrir propriedades de um objeto é utilizando o for..in:

for(let prop in pessoas){
    console.log(prop)
}

console.log('=========================')

//For in tbm pode ser usado para extrair os valores de todas propriedades do objeto
for(let p in pessoas){
    console.log(`${p} -> ${pessoas[p]}`)
}