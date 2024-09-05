function somaDobrada(umValor: number, outroValor: number) {

    if (umValor == outroValor) return {

       somaDobrada: (2* (umValor +outroValor))
    }
    else if (umValor < 1) return {

        somaDobrada: -1
    }
    else return{
        somaDobrada: (umValor + outroValor)
    }
    
}

module.exports = somaDobrada;

//
///