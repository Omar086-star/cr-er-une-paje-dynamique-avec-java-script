function getGalleryProjet (){
    fetch('http://localhost:5678/api/works')
    .then(resp => resp.json() )
    .then(json=>rendreProjet(json)) 
}
getGalleryProjet();
 const dataDeDiv= [
{ src: "assets/images/abajour-tahina.png",
     alt: "Abajour Tahina", 
     caption: "Abajour Tahin" },

    { src: 'assets/images/appartement-paris-v.png',
     alt: 'Appartement Paris V', 
     caption: 'Appartement Paris V' },

    { src: 'assets/images/restaurant-sushisen-londres.png',
     alt: 'Restaurant Sushisen - Londres',
      caption: 'Restaurant Sushisen - Londres' },

    { src: 'assets/images/la-balisiere.png', 
    alt: 'Villa “La Balisiere” - Port Louis', 
    caption: 'Villa “La Balisiere” - Port Louis' },

    { src: 'assets/images/structures-thermopolis.png', 
    alt: 'Structures Thermopolis', 
    caption: 'Structures Thermopolis' },

    { src: 'assets/images/appartement-paris-x.png',
     alt: 'Appartement Paris X', 
     caption: 'Appartement Paris X' },

    { src: 'assets/images/le-coteau-cassis.png', 
    alt: 'Pavillon “Le coteau” - Cassis', 
    caption: 'Pavillon “Le coteau” - Cassis' },

    { src: 'assets/images/villa-ferneze.png', 
    alt: 'Villa Ferneze - Isola d’Elba', 
    caption: 'Villa Ferneze - Isola d’Elba' },

    { src: 'assets/images/appartement-paris-xviii.png', 
    alt: 'Appartement Paris XVIII', 
    caption: 'Appartement Paris XVIII' },

    { src: 'assets/images/bar-lullaby-paris.png', 
    alt: 'Bar “Lullaby” - Paris', 
    caption: 'Bar “Lullaby” - Paris' },

    { src: 'assets/images/hotel-first-arte-new-delhi.png', 
    alt: 'Hotel First Arte - New Delhi', 
    caption: 'Hotel First Arte - New Delhi' }

];

function rendrePhoto (src , alt , caption){
const gallery = document.querySelector(".gallery");

const figure= document.createElement("figure"); 
const img= document.createElement("img");
const figcaption=document.createElement("figcaption")

figcaption.innerText= caption;
img.src= src;
img.alt=alt;
figure.appendChild(img);
figure.appendChild(figcaption)
gallery.appendChild(figure)
}
dataDeDiv.forEach(figure=> rendrePhoto (figure.src , figure.alt , figure.caption));