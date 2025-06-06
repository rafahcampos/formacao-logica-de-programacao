class hero {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    attack() {
        console.log(`\nO ${this.tipo} atacou usando ${this.weapon()}\n`);

    }

    weapon() {
        let weapon;
        if (this.tipo === "guerreiro") {
            weapon = "espada ⚔️"
        } else
            if (this.tipo === "mago") {
                weapon = "magia 🔥"

            } else
                if (this.tipo === "monge") {
                    weapon = "artes marciais 👊"
                } else
                    if (this.tipo === "ninja") {
                        weapon = "shuriken 🥷"
                    };

        return weapon;
    }
}

function battle() {
    for (let i = 0; i < heroes.length; i++) {
        console.log("----------------------------");
        heroes[i].attack();
    }
}

const hero1 = new hero("Gerard", 42, "guerreiro");
const hero2 = new hero("Louise", 23, "mago");
const hero3 = new hero("Pantera Negra", 36, "monge");
const hero4 = new hero("Naruto", 15, "ninja");

const heroes = [];

heroes.push(hero1, hero2, hero3, hero4);

battle();






