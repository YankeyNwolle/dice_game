// déclarations des variables

const images = ["images/dice1.png", "images/dice2.png", "images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];


// création des images
const images1 = document.querySelector('.img1');

const images2 = document.querySelector('.img2');


// obtention de l'indice aléatoire

const indiceAleatoire = Math.floor(Math.random() * images.length);

// 3. Sélectionnez l'image
const imageAffiche1 = images1[indiceAleatoire];
const imageAffiche2 = images2[indiceAleatoire];

// 4. Créez et affichez l'élément image
const nouvelleImage1 = document.createElement("img1");
nouvelleImage1.src = imageAffiche1;
console.log(nouvelleImage1);

const divImage1 = document.getElementById(".img1");
divImage1.appendChild(nouvelleImage1);

// nouvelle images 2
const nouvelleImage2 = document.createElement("img2");
nouvelleImage2.src = imageAffiche2;

const divImage2 = document.getElementById(".img2");
divImage2.appendChild(nouvelleImage2);


