/*
BUBBLE SORT
Percorre o conjunto de dados, comparando o elemento atual com o seu
sucessor e promovendo a troca entre eles caso o primeiro seja maior
que o segundo.
Faz isso em várias passadas, até, que, na última delas, nenhuma troca
tenha sido registrada.
*/

let pass, comps, trocas

let nums = [77, 44, 22, 99, 88, 0, 66, 11, 55 ,33]
// Pior caso
// let nums = [ 99, 88, 77, 66, 55, 44, 33, 22, 11, 0 ]
// Melhor caso
//let nums = [ 0, 11, 22, 33, 44, 55, 66, 77, 88, 99 ]

function BubbleSort(vetor){
    pass = 0, comps = 0, trocas = 0
    let trocou

    do{
        pass++
        trocou = false

        //Percurso for tradicional até a PENÚLTIMA posição do vetor
        for (let i = 0; i < vetor.length - 1; i++){
            comps++
            if(vetor[i] > vetor[i+1]){

                [vetor[i], vetor [i+1]] = [vetor [i+1], vetor[i]]
                trocou = true
                trocas++
            }
        }

    } while (trocou)
}

console.log(nums)

BubbleSort(nums)

console.log(nums)
console.log({pass, comps, trocas})

import { nomes } from './data/nomes-desord.mjs'

console.time("Tempo de ordenação")
BubbleSort(nomes)
console.timeEnd("Tempo de ordenação")

console.log({pass, comps, trocas})