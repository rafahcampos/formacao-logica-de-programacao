let heroName = "Link";
let exp = 19000;
let nivel;

switch (true) {
    case exp <= 1000:
        nivel = "Ferro";
        break;
    case exp <= 2000:
        nivel = "Bronze";
        break;
    case exp <= 5000:
        nivel = "Prata";
        break;
    case exp <= 7000:
        nivel = "Ouro";
        break;
    case exp <= 8000:
        nivel = "Platina";
        break;
    case exp <= 9000:
        nivel = "Ascendente";
        break;
    default:
        nivel = "Imortal"
}

console.log("------------------------------------------------------\n");

console.log("🤺 O Herói de nome " + heroName + " está no nível " + nivel);

console.log("\n------------------------------------------------------");







