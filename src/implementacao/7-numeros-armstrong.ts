function numerosArmstrong(numero) {
    let valor = 0;

    for (let n of String(numero)) {
        valor += Number(n) ** (String(numero)).length;
    }
    
    if (numero === valor) {
        return "Este eh um numero de Armstrong!";
    } else {
        return "Este nao eh um numero de Armstrong!";
    }
}

module.exports = numerosArmstrong;
