
import { objNomes } from './data/vetor-obj-nomes.mjs' //Import do arquivo que iremos usar

/*
    Quando um algoritimo d ebusca precisa atuar sobre um vetor de objetos, 
    a comparação não deve ser feita dentro da função que implementa o algoritimo, 
    Em vez disso, recebemos uma outra funação externa como parametro que resolverá a comparação
*/

/*
    Essa função esterna será chamada passando o objeto atual do vetor e espeará um 
    retorno true, caso a função externa determine que o
    objeto atual contém o valor de busca, ou false, caso contrário.



// Jeito que eu fiz
function buscaSequencialObj(vetor, valorbusca){
    for(let i = 0; i < vetor.length; i++){
        if(vetor[i].first_name === valorbusca) return "Posição do nome: " + valorbusca + " " + i + " Nomes semelhantes: " + vetor[i].alternative_names
    }
    return -1
}

console.log(buscaSequencialObj(objNomes, "FAUSTO"))
console.log(buscaSequencialObj(objNomes, "GENIFE"))

*/

function buscaSequencialObj(vetor, fnComp){
    for(let i = 0; i < vetor.length; i++){
        
        if(fnComp(vetor[i])) return i

    }
    return -1
}

function comparaNome(obj){
    return obj.first_name === 'FAUSTO'
}

function comparaNome2(obj){
    return obj.first_name === 'GENIFER'
}

console.time('Buscando Fausto')
console.log('Posição Fausto', buscaSequencialObj(objNomes, comparaNome))
console.timeEnd('Buscando Fausto')

console.time('Buscando Genifer')
console.log('Posição Genifer', buscaSequencialObj(objNomes, comparaNome2))
console.timeEnd('Buscando Genifer')

console.time('Buscando Kaio')
console.log('Posição Kaio', buscaSequencialObj(objNomes, function(obj){
    return obj.first_name === "KAIO"
}))
console.timeEnd('Buscando Kaio')

console.time('Buscando Gercina')
console.log('Posição Gercina', buscaSequencialObj(objNomes, obj => obj.first_name === 'GERCINA'))
console.timeEnd('Buscando Gercina')

