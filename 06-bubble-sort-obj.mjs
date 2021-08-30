let pass, comps, trocas

/* 
    fnComp() passará a função extrena os dois elementos adjacentes do vetor e retornará
    - true: se o primeiro elemento for maior que o segundo
    - false: se a comparação anterior não for verdadeira
*/

function BubbleSort(vetor, fnComp){
    pass = 0, comps = 0, trocas = 0
    let trocou

    do{
        pass++
        trocou = false

        //Percurso for tradicional até a PENÚLTIMA posição do vetor
        for (let i = 0; i < vetor.length - 1; i++){
            comps++
            if(fnComp(vetor[i], vetor[i+1])){

                [vetor[i], vetor [i+1]] = [vetor [i+1], vetor[i]]
                trocou = true
                trocas++
            }
        }

    } while (trocou)
}

import { objMotoristas } from "./data/motoristas-obj-desord.mjs"

// Ordenando por nome_motorista
//bubbleSort(objMotoristas, (elem1, elem2) => elem1.nome_motorista > elem2.nome_motorista)

// Ordenando por nome_motorista em ordem DECRESCENTE
// bubbleSort(objMotoristas, (elem1, elem2) => elem1.nome_motorista < elem2.nome_motorista)

// Ordenando por nome_motorista em ordem DECRESCENTE ignorando acentos
// bubbleSort(objMotoristas, (elem1, elem2) => elem1.nome_motorista.localeCompare(elem2.nome_motorista, 'pt-br') <= 0)  
// LEEEEENTO

// Ordenação em dois níveis: primeiro por razao_social e depois por nome_motorista

bubbleSort(objMotoristas, (elem1, elem2) => {
    if(elem1.razao_social === elem2.razao_social) {     
        // Mesma empresa        
        // Desempate é feito pelo nome do motorista       
         return elem1.nome_motorista > elem2.nome_motorista    }
        // Empresas diferentes, comparação direta de razao_social    
        else return elem1.razao_social > elem2.razao_social})

console.log(objMotoristas)
console.log({pass, comps, trocas})

