let joueur ={
    nom: "Joueur",
    attaque:2,
    ptsDeVie: 10,
    précision: 0.7
}
let ennemi={
    nom:"Monstre",
    attaque:3,
    ptsDeVie: 10,
    précision:0.4
}

function precision(personnage){ let x = Math.random()

    if (x <personnage.précision){
        return true 
    } else {
        return false
    }
console.log(ennemi.ptsDeVie);
}
function attaque(p1, p2){
    if (precision(p1)==true){
        p2.ptsDeVie -= p1.attaque
        console.log(p1.nom+` a perdu de la vie`)

    } else {
        console.log("il a raté le nul")

    }}

while(joueur.ptsDeVie>0 && ennemi.ptsDeVie>0){
    attaque(joueur,ennemi)
    attaque(ennemi,joueur)
}

console.log (joueur.ptsDeVie)
while(joueur.ptsDeVie>0 && ennemi.ptsDeVie>0){
}

