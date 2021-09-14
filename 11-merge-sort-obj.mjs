let comps = 0, divisoes = 0, juncoes = 0

function mergeSort (vetor, fnComp){
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

    vetEsq = mergeSort(vetEsq, fnComp)
    vetDir = mergeSort(vetDir, fnComp)

    // Mesclagem ordenada de vetEsq com vetDir
    let posEsq = 0, posDir = 0, vetRes = []

    while (posEsq < vetEsq.length && posDir < vetDir.length){
        // Quando o menor elemento for o do vetor esquerdo
        comps++
        // A ordem dos parametros na chamada a função de comparação deve ser invertida
        // porque o if é verdadeiro quando o primeiro elemento é menor que o segundo
        if(fnComp(vetDir[posDir]), vetEsq[posEsq]){
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

import { objMotoristas } from './data/motoristas-obj-desord.mjs'

//Ordenação em dois niveis 
let objMotoristasOrd = mergeSort(objMotoristas, (elem1, elem2) => {
    if(elem1.razao_social === elem2.razao_social){
        return elem1.nome_motorista > elem2.nome_motorista
    }
    else return elem1.razao_social > elem2.razao_social
})

console.log(objMotoristasOrd)
let memoriaMB = process.memoryUsage().heapUsed / 1024 / 1024
console.log("Comps:", comps, "Div:", divisoes, "Jun:", juncoes, "Memoria", memoriaMB)