let qtdVictories = 1012;
let qtdDefeats = 333;
let nivel;

function calcRanking(qtdVictories, qtdDefeats) {
    let ranking = qtdVictories - qtdDefeats;
    if (ranking < 0) {
        ranking = 0;
    }

    return ranking;
}

let ranking = calcRanking(qtdVictories, qtdDefeats)

switch (true) {
    case ranking < 10:
        nivel = "Ferro"
        break;
    case ranking <= 20:
        nivel = "Bronze"
        break;
    case ranking <= 50:
        nivel = "Prata"
        break;
    case ranking <= 80:
        nivel = "Ouro"
        break;
    case ranking <= 90:
        nivel = "Diamante"
        break;
    case ranking <= 100:
        nivel = "Lendário"
        break
    default:
        nivel = "Imortal";
        break
}


console.log("\n-------------------------------------------------------------------\n");
console.log(`⚔️  O Herói tem o saldo de ${ranking} vitórias e está no de nível ${nivel}  ⚔️`);
console.log("\n-------------------------------------------------------------------\n");
