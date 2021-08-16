// Algoritimo de busac

function buscaSequencial(vetor, valorbusca){
    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] === valorbusca) return i
    }
    return -1
}

const frutas = ['laranja', 'maça', 'uva', 'pera', 'jabuticaba', 'limao', 'mamao']

console.log('Posição da uva', buscaSequencial(frutas, 'uva'))
console.log('Posição da laranja', buscaSequencial(frutas, 'laranja'))
console.log('Posição do mamao', buscaSequencial(frutas, 'mamao'))
console.log('Posição do abacate', buscaSequencial(frutas, 'abacate'))

import { nomes } from './data/vetor-nomes.mjs'

console.log('Posição do Caio', buscaSequencial(nomes, 'CAIO'))