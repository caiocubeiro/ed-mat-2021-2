/*    MERGE SORT    

No processo de ordenação, esse algoritmo "desmonta" o vetor original    
contendo N elementos até obter N vetores de apenas um elemento cada um.    
Em seguida, usando a técnica de mesclagem (merge), "remonta" o vetor,    
dessa vez com os elementos já em ordem.

*/

let comps = 0, divisoes = 0, juncoes = 0

function mergeSort (vetor){
    if(vetor.length < 2) return vetor

    // acha o meio (aproximado) do vetor
    let meio = Math.floor(vetor.length / 2) 

    // slice divide um vetor da primeira posição informada até a última
    let vetEsq = vetor.slice(0, meio)

    // Quando o segundo parametro de slice() é omitido, a fatia vai da posição
    // informada até o final do vetor
    let vetDir = vetor.slice(meio)

    divisoes++

    //console.log(vetEsq, vetDir)

    vetEsq = mergeSort(vetEsq)
    vetDir = mergeSort(vetDir)

    // Mesclagem ordenada de vetEsq com vetDir
    let posEsq = 0, posDir = 0, vetRes = []

    while (posEsq < vetEsq.length && posDir < vetDir.length){
        // Quando o menor elemento for o do vetor esquerdo
        comps++
        if(vetEsq[posEsq] < vetDir[posDir]){
            vetRes.push(vetEsq[posEsq])
            posEsq++
        }
        // Quando o menor elemeto for do vetor direito
        else{
            vetRes.push(vetDir[posDir])
            posDir++
        }
    }

    //Determinal qual dos vetores tem sobra
    let sobra

    //Sobra esquerda
    if(posEsq < posDir){
        //Copia para a sobra todos os elementos a partir do PosEsq até o fim do VetEsq
        sobra = vetEsq.slice(posEsq)
    }
    //Sobra direita
    else{
        // Copia para a sobra todos os elemntos a partir do posDir até o fim do vetDir
        sobra = vetDir.slice(posDir)
    }

    juncoes++

    // O vetor final ordenado será a concatenação de vetRes + sobra
    return [...vetRes,...sobra]
}

let nums = [77, 44, 22, 33, 99, 55, 88, 0, 66, 11]

let numsOrd = mergeSort(nums)

console.log({numsOrd})
console.log("Comps:", comps, "Div:", divisoes, "Jun:", juncoes)

// Quanto temos algoritmos de orndenação recursivos, as variaves de estatista não podem se reniciadas dentro da propria função
comps = 0, divisoes = 0, juncoes = 0

import { nomes } from './data/nomes-desord.mjs'

console.time("Tempo de ordenação")
let nomesOrd = mergeSort(nomes)
// comando para ver quanto foi usado de memoria
let memoriaMB = process.memoryUsage().heapUsed / 1024 / 1024
console.timeEnd("Tempo de ordenação")

console.log(nomesOrd)
console.log("Comps:", comps, "Div:", divisoes, "Jun:", juncoes, "Memoria", memoriaMB)