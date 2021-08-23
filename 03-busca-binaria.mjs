/*
BUSCA BINARIA

Requer um conjunto de dados Ordenado
Atua dividindo o vetor sucessivamente em metades aproximadas,
até que o valor de busca seja localizado, ou que o ponteiro de fim
acabe antes do ponteiro de ínicio. Essa última situação indica que o valor de busca não existe no conjunto
*/

let comps

function BuscaBinaria (vetor, valorbusca){
    comps = 0
    let ini = 0
    let fim = vetor.length - 1

    while(fim >= ini){
        comps++
        // Math floor retira as casas decimais desse numero.
        let meio = Math.floor((ini + fim) / 2)
        
        // Se o valor de busca for igual ao valor do vetor na posição do meio,
        // encontramos o que procuramos e retornamos a posição onde encontramos
        if(valorbusca === vetor[meio]){
            comps++
            return meio
        } 

        // Senão, se o valor de busca for maior que o valor do meio do vetor, descartamos
        // a metade esquerda do vetor trazendo o ponteiro ini para meio + 1
        else if(valorbusca> vetor[meio]){
            comps += 2
            ini = meio + 1
        } 

        // Por fim, caso o valor de busca seja menor que o valor do meio do vetor, 
        //descartamos a metade direito do vetor tranzendo o ponteiro fim para meio - 1
        else{
            comps += 2
            fim = meio - 1
        } 
    }

    // Se chegamos até aqui, significa que fim < ini e, portanto o valor de busca
    // não existe no vetor. Para indicar isso, retornamos o valor convecional -1

    return -1

}

let nums = [0, 11, 22, 33, 44, 55, 66, 77, 88, 99]

console.log("Posição de 33", BuscaBinaria(nums, 33), 'comps: ', comps)
console.log("Posição de 77", BuscaBinaria(nums, 77), 'comps: ', comps)
console.log("Posição de 81", BuscaBinaria(nums, 81), 'comps: ', comps)

import {nomes} from './data/vetor-nomes.mjs'

console.log(`Posição de FAUSTO: ${BuscaBinaria(nomes, 'FAUSTO')}, comps: ${comps}`)
console.log(`Posição de ADAMASTOR: ${BuscaBinaria(nomes, 'ADAMASTOR')}, comps: ${comps}`)
console.log(`Posição de ZULEIDE: ${BuscaBinaria(nomes, 'ZULEIDE')}, comps: ${comps}`)
console.log(`Posição de INSTAGRAMILDA: ${BuscaBinaria(nomes, 'INSTAGRAMILDA')}, comps: ${comps}`)
console.log(`Posição de JERDERSON: ${BuscaBinaria(nomes, 'JERDERSON')}, comps: ${comps}`)
console.log(`Posição de CAIO: ${BuscaBinaria(nomes, 'CAIO')}, comps: ${comps}`)