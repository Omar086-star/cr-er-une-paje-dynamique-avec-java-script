function getGalleryProjet (){
    fetch('http://localhost:5678/api/works')
    .then(resp => resp.json() )
    .then(json=>rendreProjet(json)) 
}
getGalleryProjet();

// ajouter le code dynamiquement de HTML  h2
const header = document.createElement("header");
const h1= document.createElement("h1");
h1.innerText=`${"Sophie Bluel"} `;
header.appendChild(h1);
const nav = document.createElement("nav");
header.appendChild(nav);

const ul = document.createElement("ul");
nav.appendChild(ul);

const body =document.querySelector("body");
    document.body.appendChild(header);
function rendreDonnes(){    
    const donnees=[ 
        { type: 'text', content: 'projets' },
        { type: 'text', content: 'contact' },
        { type: 'text', content: 'login' },
        { type: 'img', content: './assets/icons/instagram.png' ,alt:'Instagram' }
    ];
    
    donnees.forEach(donnee=>{
    const li = document.createElement("li");
    if(donnee.type==='text'){
        li.innerText = donnee.content
    } else if(donnee.type==='img')  {
        const img = document.createElement("img");
    img.src=donnee.content;
    img.alt=donnee.alt;
    li.appendChild(img);
    }
    ul.appendChild(li);
    
        });
    }
    rendreDonnes()

// ajouter le code dynamiquement de HTML  h2

// const dataFiltre = [ "tous" ,"Object",
// "Appertements" ,"Hotels & Restaurants"];
// function rendreFiltre(span){
// const gallery = document.querySelector(".gallery");
// const monSpan = document.createElement("span");
// monSpan.innerHTML=dataFiltre[0];
// // for(let i = 0; i > dataFiltre.length ; i++){
// // if (dataFiltre === 0){
// //     i++
// // }
// // }
// return span
// gallery.appendChild(monSpan)
// }
// rendreFiltre()
// ajouter le code dynamiquement de HTML gallery
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

// function rendrePhoto (src , alt , caption){

//    const titleProjet = document.createElement("h2");
//     titleProjet.innerText="Mes Projets";

//     const body = document.querySelector("body");
//     const main =document.querySelector('.main');
//     const portfolio = document.getElementById('portfolio');
//     const gallery = document.querySelector(".gallery");
//      body.appendChild(main);
//      main.appendChild(contact);
//      main.appendChild(portfolio);
//      portfolio.appendChild(gallery);

//     portfolio.appendChild(titleProjet);

// const figure= document.createElement("figure"); 
// const img  = document.createElement("img");
// const figcaption=document.createElement("figcaption");

// figure.appendChild(img);
// figure.appendChild(figcaption);

// gallery.appendChild(figure);

// figcaption.innerText= caption;
// img.src= src;
// img.alt=alt;



// const contact = document.getElementById("contact");
// const h2Contact = document.createElement("h2");
// const pContact = document.createElement("p");

// h2.innerText="Contact";
// pContact.innerText="Vous avez un projet ? Discutons-en !";
// contact.appendChild(h2Contact );
// contact.appendChild(pContact);

// }
// dataDeDiv.forEach(figure=> rendrePhoto (figure.src , figure.alt , figure.caption));
// // ajouter le code dynamiquement de HTML gallery


function rendreIntroduction(){
    const introduction = document.getElementById("introduction");
    const figure=document.createElement("figure");
    introduction.appendChild(figure);
    const img = document.createElement("img");
    img.src='./assets/images/sophie-bluel.png';
    figure.appendChild(img);
}
rendreIntroduction()


// const texts= [
//    { type: 'hedaing', content: "Designer d'espace"}, 
// {   type: 'paragaph1', content1: "Je raconte votre histoire, je valorise vos idées. Je vous accompagne de la conception à la livraison finale du chantier." }, 
// {type: 'paragaph2', content2: "Chaque projet sera étudié en commun, de façon à mettre en valeur les volumes, les matières et les couleurs dans le respect de l’esprit des lieux et le choix adapté des matériaux. Le suivi du chantier sera assuré dans le souci du détail, le respect du planning et du budget." }  ,  
// {type: 'paragaph3', content3: "En cas de besoin, une équipe pluridisciplinaire peut-être constituée : architecte DPLG, décorateur(trice)"
// }];
// function rendreArticle(){
// const introduction = document.getElementById("introduction");
// const article = document.createElement("article");
// introduction.appendChild(article);
// texts.forEach(text=>{
//     if (text.type=== 'headaing'){
//         const h2 = document.createElement("h2");
//         h2.textContent=text.content;

//     }else if(text.type=== 'paragaph1'){
//         const p = document.createElement("p");
//         p.textContent=text.content1
//     } else if(text.type=== 'paragaph2'){
//         const p = document.createElement("p");
//         p.textContent=text.content2
//     } else if(text.type=== 'paragaph3'){
//         const p = document.createElement("p");
//         p.textContent=text.content3
//     }
// })
// document.body.appendChild(introduction)
// };
// rendreArticle()
const texts = [
    { type: 'heading', content: "Designer d'espace" },
    { type: 'paragraph', content: "Je raconte votre histoire, je valorise vos idées. Je vous accompagne de la conception à la livraison finale du chantier." },
    { type: 'paragraph', content: "Chaque projet sera étudié en commun, de façon à mettre en valeur les volumes, les matières et les couleurs dans le respect de l’esprit des lieux et le choix adapté des matériaux. Le suivi du chantier sera assuré dans le souci du détail, le respect du planning et du budget." },
    { type: 'paragraph', content: "En cas de besoin, une équipe pluridisciplinaire peut-être constituée : architecte DPLG, décorateur(trice)" }
];

function rendreArticle() {
    const introduction = document.getElementById("introduction");
    const article = document.createElement("article");
    introduction.appendChild(article);
    
    texts.forEach(text => {
        if (text.type === 'heading') {
            const h2 = document.createElement("h2");
            h2.textContent = text.content;
            article.appendChild(h2);
        } else if (text.type === 'paragraph') {
            const p = document.createElement("p");
            p.textContent = text.content;
            article.appendChild(p);
        }
    });
}

rendreArticle();


function rendrePhoto(src, alt, caption) {
    const figure = document.createElement("figure");
    const img = document.createElement("img");
    const figcaption = document.createElement("figcaption");

    img.src = src;
    img.alt = alt;
    figcaption.innerText = caption;

    figure.appendChild(img);
    figure.appendChild(figcaption);

    const gallery = document.querySelector(".gallery");
    gallery.appendChild(figure);
}

// Créer l'élément `h2` pour les projets une seule fois
const portfolio = document.getElementById('portfolio');
const h2Projet = document.createElement("h2");
h2Projet.innerText = "Mes Projets";
portfolio.prepend(h2Projet);

// Ajouter les images dynamiquement
dataDeDiv.forEach(figure => rendrePhoto(figure.src, figure.alt, figure.caption));

// Ajouter la section contact une seule fois
const contact = document.getElementById("contact");
const h2Contact = document.createElement("h2");
const pContact = document.createElement("p");

h2Contact.innerText = "Contact";
pContact.innerText = "Vous avez un projet ? Discutons-en !";

contact.appendChild(h2Contact);
contact.appendChild(pContact);













//     // Parcourt les items pour créer et ajouter les <li>
//         // Crée l'élément <ul>

    // const ul = document.createElement('ul');

    // // Crée les éléments de la liste
    // const items = [
    //     { type: 'text', content: 'projets' },
    //     { type: 'text', content: 'contact' },
    //     { type: 'text', content: 'login' },
    //     { type: 'img', content: './assets/icons/instagram.png', alt: 'Instagram' }
    // ];
// function createNavList() {
//     items.forEach(item => {
//         const li = document.createElement('li');

//         if (item.type === 'text') {
//             li.textContent = item.content;
//         } else if (item.type === 'img') {
//             const img = document.createElement('img');
//             img.src = item.content;
//             img.alt = item.alt;
//             li.appendChild(img);
//         }

//         ul.appendChild(li);
//     });

//     // Ajoute l'élément <ul> au <body> ou à une section spécifique
//     document.body.appendChild(ul);
// }

// // Appelle la fonction pour créer et ajouter la liste
// createNavList();



// ul.appendChild(imgProfil)