
function choosePeople() {

  let prénoms = ['Victor', 'Lucas', 'Gabriel', 'Lola', 'Ewan','Thomas','Oscar','Jad','Tristan','Adam'];
  let caractéristiques = ['flexeur', 'pisteur', 'drôle', 'dab', 'magnifique','l\'jeune','geek','subtil','côté','classe'];
  let survivants = []

  while(survivants.length < 5){

    let personnageBlase = prénoms[Math.floor(Math.random() * 10)]
    let personnageCara = caractéristiques[Math.floor(Math.random() * 10)]

    let survivant = {
      nom: personnageBlase,
      caractéristiques: personnageCara,
      vivant : true,
    }
    survivants.push(survivant)
  }
  return survivants
}

console.log(choosePeople())

class tueur {
    constructor(prénom, vie, prob_tue, prob_esquive ,prob_kamikaze) {
    this.prénom = prénom
    this.vie = vie
    this.prob_tue = prob_tue
    this.prob_esquive = prob_esquive
    this.prob_kamikaze = prob_kamikaze
    }
}

let meurtrier = new tueur('Jason', 100, 0.3, 0.5, 0.2)

let survivants = choosePeople()

function attack(survivants) {

  const chance = Math.random()

  if (chance <= meurtrier.prob_tue) {
    console.log(`${meurtrier.prénom} attaque ${survivants.nom} et le tue.`);
    survivants.vivant = false;
  } else if (chance <= (meurtrier.prob_tue + meurtrier.prob_esquive)) {
    console.log(`${meurtrier.prénom} attaque ${survivants.nom}, mais ${survivants.nom} esquive et inflige 10 points de dégâts.`);
    meurtrier.vie -= 10;
  } else {
    console.log(`${meurtrier.prénom} attaque ${survivants.nom}, mais ${survivants.nom} inflige 15 points de dégâts à ${meurtrier.prénom} avant de mourir.`);
    meurtrier.vie -= 15;
    survivants.pointsDeVie = 0;
    survivants.vivant = false;
  }

}

while (meurtrier.vie > 0 && survivants.length > 0) {

  survivants.forEach(survivant => {
    if (survivant.vivant) {
      attack(survivant);
    }
  });

  survivants = survivants.filter(survivant => survivant.vivant);

}

if (meurtrier.vie <= 0) {
  console.log("Les survivants ont tué le meurtrier. Ils ont gagné !");
} else {
  console.log("Le meurtrier a tué tous les survivants. Il a gagné !");
}
    
