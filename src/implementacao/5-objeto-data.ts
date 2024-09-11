function criaObjeto(data: string) {
    // Divide a string da data no formato "dd/mm/aaaa"
    const [dd, mm, aaaa] = data.split('/');

    // Retorna um objeto com as partes da data
    return { dia: dd, mes: mm, ano: aaaa };

}

module.exports = criaObjeto;
