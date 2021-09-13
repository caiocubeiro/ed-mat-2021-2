/*    MERGE SORT    

No processo de ordenação, esse algoritmo "desmonta" o vetor original    
contendo N elementos até obter N vetores de apenas um elemento cada um.    
Em seguida, usando a técnica de mesclagem (merge), "remonta" o vetor,    
dessa vez com os elementos já em ordem.

*/

function mergeSort (vetor){
    if(vetor.length < 2) return vetor

    // acha o meio (aproximado) do vetor
    let meio = Math.floor(vetor.length / 2) 

    // slice divide um vetor da primeira posição informada até a última
    const vetEsq = vetor.slice(0, meio)

    // Quando o segundo parametro de slice() é omitido, a fatia vai da posição
    // informada até o final do vetor
    const vetDir = vetor.slice(meio)

    vetEsq = mergeSort(vetEsq)
    vetDir = mergeSort(vetDir)

}