function juntaListas(parte1, parte2) {
    let posicaoAtualParte1 = 0;
    let posicaoAtualParte2 = 0;
    const resultado = [];

    while(posicaoAtualParte1 < parte1.length && posicaoAtualParte2 < parte2.length) {
        let produtoAtualParte1 = parte1[posicaoAtualParte1];
        let produtoAtualparte2 = parte2[posicaoAtualParte2];

        if(produtoAtualParte1.preco < produtoAtualparte2.preco) {
            resultado.push(produtoAtualParte1);
            posicaoAtualParte1 ++;
        }else {
            resultado.push(produtoAtualparte2);
            posicaoAtualParte2 ++;
        }
    }



    return resultado.concat(posicaoAtualParte1 < parte1.length ? parte1.slice(posicaoAtualParte1) : parte2.slice(posicaoAtualParte2)); // método concat com ternário
}

module.exports = juntaListas;