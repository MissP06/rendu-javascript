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

function precision(précision){
    if (Math.random<précision){
        attaque=true
        PJ=joueur.précision<precision
    } else {
        attaque=true
        PE=ennemi.précision<precision
    }
console.log(ennemi.ptsDeVie);
}
function attaque(attaques){
    if (PJ<precision){
        PVE=ennemi.ptsDeVie - (ATTJ= joueur.attaque)
        console.log("Le joueur a perdu 3 points de vie")
    } else {
        PVJ=joueur.ptsDeVie - (ATTE = ennemi.attaque)
        console.log("L'ennemi a perdu 2 points de vie")
    }}
Math.random()
console.log (joueur.ptsDeVie)
while(joueur.ptsDeVie>0 && ennemi.ptsDeVie>0){
}
