const livros = require('./array');

function encontraMenores(pivo, array) { // encontra menores a partir de um pivô

    let menores = 0;

    for(let i = 0; i < array.length; i++) {

        let produtoAtual = array[i];

        if(produtoAtual.preco < pivo.preco) {
            menores++;
        }
    }

    trocaLugar(array, array.indexOf(pivo), menores) // Chama troca lugar, passa o array, indice do array na posição do pivo e a quantidade de menores que pivo encontrados

    return array;
}

function trocaLugar(array, de, para) { // função para trocar os objetos de lugar

    const elemento1 = array[de]; // elemento1 recebe o objeto pivo
    const elemento2 = array[para]; // elemento2 recebe o objeto que será trocado de lugar com pivo

    array[para] = elemento1;
    array[de] = elemento2;
}

function divideNoPivo(array) {

    let pivo = array[Math.floor(array.length / 2)]; // aloca a variacel pivo o objeto localizado no meio do array
    console.log(`O pivo é: ${pivo}`); // mostra o objeto que será utilizado como pivô

    encontraMenores(pivo, array); //chama a função encontra menores
    let valoresMenores = 0;

    for(let i = 0; i < array.length; i++) {

        let atual = array[i];

        if(atual.preco <= pivo.preco && atual !== pivo) {
            trocaLugar(array, i, valoresMenores);
            valoresMenores++;
        }
    }

    return array;

}


//console.log(divideNoPivo(livros));
// console.log(encontraMenores(livros[2], livros)) // Pivo está sendo o objeto Java, de valor 30

module.exports = trocaLugar;