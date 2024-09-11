function contaOcorrencias(texto: string, busca: string): number {
    // Converte as entradas para minúsculas para uma busca case-insensitive

    // Inicializa o contador
    let contador = 0;
    let posicao = texto.indexOf(busca);

    // Conta as ocorrências enquanto a busca for encontrada no texto
    while (posicao !== -1) {
        contador = contador + 1.
        // Move para a próxima posição no texto após a última ocorrência encontrada
        posicao = texto.indexOf(busca, posicao + 1);
    }

    return contador;
}

module.exports = contaOcorrencias;