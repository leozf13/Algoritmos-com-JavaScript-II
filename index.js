const listaLivros = require('./array');
const juntaListas = require('./juntaListas');

function mergeSort(array, nivelAninhamento = 0) { // utilizando-se de recursão, chamando a própria função dentro dela

    console.log(`Nível de aninhamento = ${nivelAninhamento}`)
    console.log(array)

    if(array.length > 1) { //condição para dividir array
        const meio = Math.floor(array.length / 2); // método Math.floor arredonda para um número inteiro
        const parte1 = mergeSort(array.slice(0, meio), nivelAninhamento + 1); //slice dividie o aray // onde começa e onde termina // mergeSort chamando a si mesma
        const parte2 = mergeSort(array.slice(meio, array.length), nivelAninhamento + 1);  //Conceito de aninhamento
        array = juntaListas(parte1, parte2);
    }

    return array;    
}


console.log(mergeSort(listaLivros))