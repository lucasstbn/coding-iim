/*let musiques = ['Anissa de Wejdene','Shavkat de Freeze Corleone','Lovely de Billie Eilish', 'La Plaie de Josman','Vent de l\'est de Laylow']
class Personnage {
    constructor(name, mentalHealth, swap, feux) {
        this.name = name
        this.mentalHealth = mentalHealth
        this.swap = swap
        this.feux = feux
        
    }
    
ChooseMusique() {
 let radio = musiques[Math.floor(Math.random() *5)]
    console.log(`La radio joue la musique ${radio}`)
  if (radio == musiques[0]) {
    this.mentalHealth -= 1
    this.swap += 1
 } else {
    this.feux -= 1
} 
if(this.mentalHealth == 0 || this.feux ==0) {
return 
}
console.log(`Il reste ${this.feux} feux avant de rentrer`)
} 
}

let passager = new Personnage ('John', 10, 0, 30)

while(passager.mentalHealth>0 && passager.feux>0) {
    passager.ChooseMusique()
    if(passager.mentalHealth <= 0) {
        console.log("J\'EN PEUX PLU !")
        break
} else if (passager.feux <= 0 ) {
        console.log(`Bien arrivé, avec ${passager.swap} changements. ${passager.name} est content`)
}
}
*/

