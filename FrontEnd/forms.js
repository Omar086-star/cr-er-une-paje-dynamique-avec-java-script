
// requeperer start la form de contact dynamiquement

function creerFormContact() {
    document.addEventListener("DOMContentLoaded", function() {
        // Ajouter le titre et le paragraphe de contact
        const h2Contact = document.createElement("h2");
        h2Contact.innerText = "Contact";

        const pContact = document.createElement("p");
        pContact.innerText = "Vous avez un projet ? Discutons-en !";

        const contact = document.getElementById('contact');
        contact.appendChild(h2Contact);
        contact.appendChild(pContact);

        // Créer le formulaire
        const form = document.createElement("form");
        form.setAttribute('method', 'post');
        form.setAttribute('id', 'formContact');
        form.setAttribute('action', '#');

        // Créer le label et l'input pour le nom
        const labelNom = document.createElement('label');
        labelNom.textContent = 'Nom';
        labelNom.setAttribute('for', 'name');

        const inputNom = document.createElement('input');
        inputNom.setAttribute('type', 'text');
        inputNom.setAttribute('name', 'name');
        inputNom.setAttribute('id', 'inputNom');

        // Créer le label et l'input pour l'email
        const labelEmail = document.createElement('label');
        labelEmail.textContent = 'Email';
        labelEmail.setAttribute('for', 'email');

        const inputEmail = document.createElement('input');
        inputEmail.setAttribute('type', 'email');
        inputEmail.setAttribute('name', 'email');
        inputEmail.setAttribute('id', 'inputEmail');

        // Créer le label et la textarea pour le message
        const labelTextarea = document.createElement('label');
        labelTextarea.textContent = 'Message';
        labelTextarea.setAttribute('for', 'message');

        const textarea = document.createElement('textarea');
        textarea.setAttribute('name', 'message');
        textarea.setAttribute('id', 'message');
        textarea.setAttribute('cols', '30');
        textarea.setAttribute('rows', '10');

        // Créer le bouton de soumission
        const inputEnvoyer = document.createElement('input');
        inputEnvoyer.setAttribute('type', 'submit');
        inputEnvoyer.setAttribute('value', 'Envoyer');

        // Ajouter les éléments au formulaire
        form.appendChild(labelNom);
        form.appendChild(inputNom);
        form.appendChild(labelEmail);
        form.appendChild(inputEmail);
        form.appendChild(labelTextarea);
        form.appendChild(textarea);
        form.appendChild(inputEnvoyer);

        // Ajouter le formulaire à la section contact
        contact.appendChild(form);

        // Ajouter la section contact au main
        const main = document.querySelector('main');
        if (main) {
            main.appendChild(contact);
        } else {
            // Si 'main' n'existe pas, ajouter 'contact' directement au body
            document.body.appendChild(contact);
        }
    });
}
creerFormContact();

// requeperer fin la form de contact dynamiquement




// requeperer start la form d'inscrption dynamiquement

function creerFormInscription(){
    document.addEventListener('DOMContentLoaded', function(){
        const modaleDeLogin = document.querySelector('.modaleDeLogin');
        const titleDeLogin = document.createElement('h2');
        titleDeLogin.classList.add('titleDeLogin');
        titleDeLogin.innerText='Log In';
        modaleDeLogin.appendChild(titleDeLogin);

        const formModale = document.createElement('form');
        formModale.setAttribute('action','#');
        formModale.setAttribute('method','post');
        formModale.setAttribute('id','formModale');
        modaleDeLogin.appendChild(formModale);

const label = document.createElement('label');
label.setAttribute('for','email');
label.textContent='E-mail';
formModale.appendChild(label);

const input = document.createElement('input');
input.setAttribute('type','email');
input.setAttribute('name','email');
formModale.appendChild(input);

const labelP = document.createElement('label');
labelP.setAttribute('for','password');
labelP.textContent='Password';
formModale.appendChild(labelP);

const inputP = document.createElement('input');
inputP.setAttribute('type','password');
inputP.setAttribute('name','password');
formModale.appendChild(inputP);

const button= document.createElement('button');
button.textContent='Se contacter';
formModale.appendChild(button);

const a =document.createElement('a');
a.href("#");
a.textContent='Mot de passe oublié';
modaleDeLogin.appendChild(a);
    })
}
creerFormInscription()
// requeperer fin la form d'inscrption dynamiquement







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



// ul.appendChild(imgProfil)




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



// function creerFormContact(){
// const h2Contact = document.createElement("h2");
// const pContact = document.createElement("p");

// h2Contact.innerText = "Contact";
// pContact.innerText = "Vous avez un projet ? Discutons-en !";

// contact.appendChild(h2Contact);
// contact.appendChild(pContact);

// document.addEventListener("DOMContentLoaded", function(){
// const form = document.createElement("form");
// form.setAttribute('method','post');
// form.setAttribute('id','formContact');
// form.setAttribute('action','#');
// 7
// // creer label nom de form
// const labelNom=document.createElement('label');
// labelNom.textContent('Nom');
// labelNom.setAttribute('for','name');

// // creer input nom de form
// const inputNom= document.createElement('input');
// inputNom.setAttribute('type','text');
// inputNom.setAttribute('name','nom')
// inputNom.setAttribute('id','inputNom');
// const labelEmail=document.createElement('label');
// labelEmail.textContent('email');
// labelEmail.setAttribute('for','email');

// // creer input email de form
// const inputEmail= document.createElement('input');
// inputEmail.setAttribute('type','email');
// inputEmail.setAttribute('name','email');
// inputEmail.setAttribute('id','inputEmail');

// // creer label textarea de form
// const labelTextarea = document.createElement('label');
// labelTextarea.setAttribute('for','message');
// labelTextarea.textContent('Message');

// // creer input textarea de form
// const textarea=document.createElement('textarea');
// textarea.setAttribute('name','message');
// textarea.setAttribute('id','message');
// textarea.setAttribute('cols','30');
// textarea.setAttribute('rows','10');

// // creer label nom de form
// const inputEnvoyer = document.createElement('input');
// inputEnvoyer.setAttribute('value','Envoyer');
// inputEnvoyer.setAttribute('type','submit');

// // ajouter la form à la section contact

// form.appendChild(labelNom);
// form.appendChild(inputNom);
// form.appendChild(labelEmail);
// form.appendChild(inputEmail);
// form.appendChild(labelTextarea);
// form.appendChild(textarea);
// form.appendChild(inputEnvoyer);

// const contact=document.getElementById('contact');
// contact.appendChild(form);
//  const main = document.querySelector('main');
// if (main) {
//     main.appendChild(contact);
// } else {
//     // Si 'main' n'existe pas, ajouter 'contact' directement au body
//     document.body.appendChild(contact);
// }
//     });
// }
// creerFormContact()
