/*class Pokemon {
    constructor(name, attack, defense, hp,luck) {
        this.name = name,
        this.attack = attack,
        this.defense = defense,
        this.hp = hp,
        this.luck = luck
    }
    isLucky() {
        let chance = Math.random() * 10; 
        // Génère un nombre aléatoire entre 0 et 10
        return chance <= this.luck;
      } 

attackPokemon(victime) {
    if (this.isLucky()) {
    let degats = this.attack - victime.defense
    victime.hp -= degats
    console.log(`${victime.name} à subit ${degats} de dégâts. Il ne reste plu que ${victime.hp} pv à ${victime.name}`) 
 }    else { console.log('miss')
}

}
    }

    let Pokemon1 = new Pokemon ('Lucario',30,20,50,6)
    let Pokemon2 = new Pokemon ('Simiabraz',45,10,50,4)
    

while(Pokemon1.hp>0 && Pokemon2.hp>0) {
Pokemon1.attackPokemon(Pokemon2)
if (Pokemon2.hp<=0) {
break }
Pokemon2.attackPokemon(Pokemon1)

}

if (Pokemon2.hp<0){
    console.log("Simiabraz est mort, ahah le naze")
} else {
    console.log("Lucario est partit trop tôt")
}
*/