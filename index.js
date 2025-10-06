// déclarations des variables

const images = ["images/dice1.png", "images/dice2.png", "images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];

// génération des indices aléatoires
const indicealeatoire1 = Math.floor(Math.random() * images.length);
const indicealeatoire2 = Math.floor(Math.random() * images.length);

// affichage de l'images 1 alétoirement
const affiche_image_1 = images[indicealeatoire1];

document.getElementById("img1").src = affiche_image_1;

// image 2 aléatoire

const affiche_image_2 = images[indicealeatoire2];

document.getElementById("img2").src = affiche_image_2;

//  condition

if (indicealeatoire1 > indicealeatoire2) {
    // si le joueur 1 gagne la partie
    const joueur1 = document.getElementById('resultat');
    joueur1.textContent = "Victoire du joueur 1 🤭";
} else if (indicealeatoire1 < indicealeatoire2) {
    // si le joueur 2 gagne la partie
    const joueur2 = document.getElementById('resultat');
    joueur2.textContent = "Victoire du joueur 2 😁";
} else {
    // si il y a égalité
    const joueur3 = document.getElementById('resultat');
    joueur3.textContent = "Egalité Parfaite 🫡";
}