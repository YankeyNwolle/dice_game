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

