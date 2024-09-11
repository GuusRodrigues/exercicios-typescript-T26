function apuraVotacao(votos: number[]): string {

    let votos1 = 0;
    let votos2 = 0;
    let votos3 = 0;

    for (let voto of votos) {
        if (voto === 1) {
            votos1++;
        } else if (voto === 2) {
            votos2++;
        } else if (voto === 3) {
            votos3++;
        }
    }

    if (votos1 > votos2 && votos1 > votos3) {
        return "Vencedor: 1";
    } else if (votos2 > votos1 && votos2 > votos3) {
        return "Vencedor: 2";
    } else if (votos3 > votos1 && votos3 > votos2) {
        return "Vencedor: 3";
    } else {
        return "Empate";
    }
}

module.exports = apuraVotacao;