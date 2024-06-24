 update();
 const main = document.querySelector('.main')
async function getGalleryProjets (){
console.log(window.localStorage.getItem("userToken"))

   var obj = []; 
    
   const response = await fetch('http://localhost:5678/api/works')
   const result =  await response.json()
 
        return result ;
    
    }

function update(){
    const clickLogInHead= document.getElementById('click-login');
    if(window.localStorage.getItem("userToken")){
      clickLogInHead.innerText='logout';  
      
      const filtreVide=document.getElementById('filtreVide');
   filtreVide.style.display='none' 
      //   filtreVide.classList.toggle('hidden');
    //         filtreVide.innerHTML='';
const divPro = document.getElementById('divPro');
divPro.style.display= 'contents'
    //   const contrPro = document.querySelector('.butt');
    //   filtreVide.style.visibility('hidden');
      }else{
clickLogInHead.innerText='login';  

    }
clickLogInHead.addEventListener('click', ()=>{
  
window.localStorage.removeItem("userToken");
 console.log(window.localStorage.getItem("userToken"));
 window.location.href='login.html'
    
})
}
async function displayProjet(){
    const projets = await getGalleryProjets();
projets.forEach((projet)=>{
    rendrePhoto(projet.imageUrl , projet.title  ,projet.title, projet.id) 
})
}
displayProjet();

function rendrePhoto(src, title , projetId) {
    const gallery = document.getElementById("gallery");
    const figure = document.createElement("figure");
figure.setAttribute('data-id', projetId);
    const img = document.createElement("img");
    const figcaption = document.createElement("figcaption");

    img.src = src;
    img.alt = title;
    figcaption.innerText = title;
   

    figure.appendChild(img);
    figure.appendChild(figcaption);
    gallery.appendChild(figure);
}


async function getCategorys(){
const response = await fetch("http://localhost:5678/api/categories");
return await response.json();
}
getCategorys()

async function afficherProjets(projets){
const gallery = document.getElementById('gallery');
const portfolio = document.getElementById('portfolio')
portfolio.appendChild(gallery)
body.innerHTML='';

 };

function butColor() {
const fil = document.querySelector('.filtre');
const buttons = document.querySelectorAll('.filtre .contrPro');

fil.addEventListener('click', (event) => {
const filtreId = event.target.id;
buttons.forEach(button => {
if (button.id === filtreId) {
button.classList.add('active');
} else {
button.classList.remove('active');
}
});
});
}

butColor();
 

async function ajouteButtons(){
const categorys = await getCategorys();
categorys.forEach((category)=>{

const filT   = document.querySelector('.filtre');
const button = document.createElement( 'button');
button.textContent= category.name;
button.id = category.id;
button.classList.add('trier')
// button.classList.add('filtER')
filT.appendChild(button)

})
}

// ajouteButtons();

 
async function leFiltre() {
const ourFiltre = await getGalleryProjets();
// const newElement = ourFiltre.filter(test => test.categoryId !== 0);
// newElement.forEach(projet => rendrePhoto(projet.imageUrl, projet.title, projet.id));

const main = document.querySelector('.main');  
const buttons = document.querySelectorAll(".trier");
// if (buttons.length === 0) {
//         console.error("No buttons found. Check the selector or ensure the elements exist in the DOM.");
//         return;
//     }
buttons.forEach((button) => {
button.addEventListener("click", (e) => {
e.preventDefault();
 const buttonId = e.target.id;
 const categoryId=buttonId
main.innerHTML = '';  

// if (category.id !==  buttonId[0]){}
if (categoryId ===  '0') {
    // const filtered = ourFiltre.filter(test => test.categoryId !== 0);
    // afficherProjets(filtered);
    //jusqu'à ici il fonctionne , mais le filtre n'est pas

         // const rendre = m.filter(test=> test.categoryId !== 0);
        
        // afficherProjets(result);
        // console.log("aller");
        //   console.log(result);
        
        
        // }
const rendre = ourFiltre.filter((projet =>projet.category.id !== 0)  );
        afficherProjets(projet);
        rendre.forEach(projet=>rendrePhoto(projet.imageUrl ,  projet.title , projet.id));

// rendre.forEach((projet) => {
// (projet.imageUrl, projet.title, projet.id);
// });
console.log(buttons);
console.log('see me for test')

} 
else {
   const rendreAu = ourFiltre.filter((projet =>projet.category.id === 0)  );
        afficherProjets(projet);
        rendreAu.forEach(projet=>rendrePhoto(projet.imageUrl ,  projet.title , projet.id));

// const filtered = ourFiltre.filter((projet) => {
// return projet.categoryId = buttonId; 
// });
// filtered.forEach((projet) => {
// rendrePhoto(projet.imageUrl, projet.title, projet.id);
// });
    // ourFiltre.forEach((projet) => {
    //     // console.log(buttons)
        console.log('see me for test 47') ;
        rendrePhoto(projet.imageUrl, projet.title, projet.id);
    // });
}});
    });}
document.addEventListener("DOMContentLoaded", async () => {
   await ajouteButtons();
   leFiltre();
});

// getGalleryProjets().then(result=>{
// const m = result;
// const toBack = m.filter(test=> test.categoryId !== 0);
// toBack.forEach(projet=>rendrePhoto(projet.imageUrl , projet.title  , projet.id));

// const buttons = document.querySelectorAll('.filtre button');
// const buttNo = document.querySelector('.butt');
// buttons.forEach(button =>{ 
// button.addEventListener('click', (event)=>{

// event.preventDefault();
// const categoryId = button.id;

// var rendre= result;

// if(categoryId ==="0" ){
// const rendre = m.filter(test=> test.categoryId !== 0);

// afficherProjets(result);
// console.log("aller");
//   console.log(result);

// rendre.forEach(projet=>rendrePhoto(projet.imageUrl ,  projet.title , projet.id));

// }else{

// const rendre1 = m.filter(test=> test.categoryId === Number(categoryId));
// afficherProjets(m);
// console.log(categoryId);

// console.log(m.filter(test=> test.categoryId=== Number(categoryId)));

// rendre1.forEach(projet=>rendrePhoto(projet.imageUrl , projet.title , projet.title ));

// }

// } ) });


// } ) 
//  }

// filtreProjets();


function clickModifier(){
    const proClick=document.querySelector('.pourModifier');
    const modale=document.querySelector('.modale')
    const cancel = document.querySelector('.fa-xmark');

    proClick.addEventListener('click',()=>{ 
modale.style.display='block'
    })
    cancel.addEventListener('click',()=>{ 
        modale.style.display='none'
            })  
}
clickModifier()

async function rendreMiniGallery() {
    const miniGallery = document.querySelector(".miniGallery");
    miniGallery.innerHTML = '';

    const mini = await getGalleryProjets();
    mini.forEach(projet => {
        var figure = document.createElement("figure");
        figure.setAttribute('data-id', projet.id);

        var img = document.createElement("img");   
        var span = document.createElement("span");
        var suppr = document.createElement("i");
        suppr.id = projet.id;
// console.log(projet.id)
        // Ajout des classes
        span.classList.add('spanSuprim');
        suppr.classList.add('fa-regular', 'fa-trash-can');

        // Style de l'image
        img.style.width = '76px';
        img.style.height = '102px';

        // Style de la figure
        figure.style.width = '87px';
        figure.style.height = '130px';
        figure.style.position = 'relative'; // Pour que le span soit positionné correctement

        // Style du bouton de suppression
        suppr.style.color = '#ffffff';
        suppr.style.fontSize = '9px';
        suppr.style.position = 'absolute';
        suppr.style.top = '3px';
        suppr.style.right = '3px';

        // Style du span
        span.style.zIndex = '2';
        span.style.backgroundColor = '#000000';
        span.style.display = 'flex';
       
        span.style.width = '15px';
        span.style.height = '15px'; 
        span.style.position = 'absolute';
        span.style.top = '5px';
        span.style.right = '10px';
        // Définir la source et l'alt de l'image
        img.src = projet.imageUrl;
        img.alt = projet.title;

        // Assembler les éléments
        span.appendChild(suppr);
        figure.appendChild(img);
        figure.appendChild(span);
        miniGallery.appendChild(figure);
    });
    supprimerProjetsBack
    ();

}

rendreMiniGallery();

// ajouter des photos
function displayModaleAjouter(){
const modale=document.querySelector('.modale')
const modaleAjouter = document.getElementById('modaleAjouter');
const iconLeft = document.getElementById('icoLeft');
const iconRigt = document.getElementById('icoRight');
const btnMdlePjt = document.getElementById('buttonModaleProjet');

btnMdlePjt.addEventListener('click', ()=>{
modaleAjouter.style.display='block';
modale.style.display='none';
});
iconLeft.addEventListener('click', ()=>{
    modaleAjouter.style.display='none';
    modale.style.display='block';
});
iconRigt.addEventListener('click', ()=>{
    modaleAjouter.style.display='none';
});

}
displayModaleAjouter();


async function supprimerProjetsBack() {  
const loged = window.localStorage.getItem("userToken");
const supprs = document.querySelectorAll('.fa-trash-can');
supprs.forEach(suppr => {    
        suppr.addEventListener('click', () => {
            const id = suppr.id;
            const init = {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${loged}`     
                }

            };
            
            fetch('http://localhost:5678/api/works/' + id, init)
            .then((response) => {
                if(loged === 'true') {  // Corrected comparison operator
                    if (!response.ok) {
                        console.log('Operation n\'a pas été faite');
                        return response.json();
                    } else {
                        console.log('Operation a été faite');
                        rendreMiniGallery();
                        getGalleryProjets();
                    }
                }
            })
            .then((data) => {
                console.log(data);
                supprimerProjet(id)

            })
            .catch((error) => {
                console.error('Error:', error);
            });
        });
    });
}
function supprimerProjet(projetId) {
    console.log(`Appel de supprimerProjet avec projetId: ${projetId}`);

    // Sélectionner tous les éléments de projet sur la page d'accueil et dans la modale
    const elementsProjet = document.querySelectorAll(`.gallery figure[data-id='${projetId}'], .contentModale figure[data-id='${projetId}']`);
    
    console.log(`Elements trouvés avec data-id='${projetId}':`, elementsProjet);

    // Parcourir chaque élément trouvé et le supprimer du DOM
    elementsProjet.forEach(element => {
        element.parentNode.removeChild(element);
        console.log(`Elément supprimé: ${element.outerHTML}`);
    });

    

    console.log(`Les éléments du projet avec l'id ${projetId} ont été supprimés.`);
}

// ajouter les photos

const imageModale = document.getElementById('imageModale');
const labelFile = document.getElementById('labelFile');
const inFile = document.querySelector('.containerModale .inFile');
const iconImageFile = document.getElementById('iconImageFile'); 
const megaBite = document.getElementById('megaBite');
const buttonModaleAjout= document.getElementById('buttonModaleAjout');
inFile.addEventListener('change' , ()=>{
    const file = inFile.files[0];
    console.log(file);
    const reader = new FileReader();
    reader.onload = function(e){
        imageModale.src = e.target.result
        imageModale.style.display='flex'
        labelFile.style.display='none'
        iconImageFile.style.display='none'
        megaBite.style.display='none'
 
}
    reader.readAsDataURL(file);
});



// changer le color de button d ajouter
function clickDeAjoute(){
    const formMod=document.getElementById('formMod'); 
    const inFile = document.querySelector('.inFile');
    const inTitle = document.querySelector('.inTitle');
    const selected = document.querySelector('.selected');
    const buttonModaleAjout=document.getElementById('buttonModaleAjout');

    formMod.addEventListener('input', ()=>{
if(inFile.value!=="" && inTitle.value!=="" && selected.value!=="" ){
 buttonModaleAjout.style.backgroundColor='#1D6154'
 buttonModaleAjout.style.color='#ffffff'

}else{
    // buttonModaleAjout.classList.remove('active');

}
    })

}
clickDeAjoute()

// ajouter les options dynamiquement
async function ajouteOptions(){
    const selected =document.querySelector('.formModale .selected');
    const categorys = await getCategorys();
    categorys.forEach(category=>{
        const option=document.createElement('option');
        option.value = category.id;
        option.textContent = category.name;
        selected.appendChild(option)
    })
}
ajouteOptions()

// faire le post pour ajouter la photo
const formMod = document.getElementById('formMod');
const title = document.querySelector('.formModale #title');
const category = document.querySelector('.formModale #category');
const loged = window.localStorage.getItem("userToken");
formMod.addEventListener('submit', async (e) => {
e.preventDefault();

const formData = new FormData(formMod);  
 
fetch('http://localhost:5678/api/works', {
method: "POST",
body: formData,
headers: {
    // "Content-Type": "application/json",
    "Authorization": `Bearer ${loged}`     
}

 })
.then(response => response.json())

.then(projet => {
console.log(projet);
console.log('La photo a été ajoutée avec succès', projet);
getGalleryProjets();
rendreMiniGallery(); 
ajouterProjet(projet.id, projet.imageUrl, projet.title , projet.title);
 })
 
.catch(error => {
console.error('Erreur:', error);
});
});

function ajouterProjet(projetId, imgSrc, imgAlt, figCaption) {
    // Créer une nouvelle figure
    const nouvelleFigure = document.createElement('figure');
    nouvelleFigure.setAttribute('data-id', projetId);

    const nouvelleImage = document.createElement('img');
    nouvelleImage.src = imgSrc;
    nouvelleImage.alt = imgAlt;

    const nouvelleFigcaption = document.createElement('figcaption');
    nouvelleFigcaption.textContent = figCaption;

    nouvelleFigure.appendChild(nouvelleImage);
    nouvelleFigure.appendChild(nouvelleFigcaption);

    // Sélectionner les conteneurs où la figure doit être ajoutée
    const galleries = document.querySelectorAll('.gallery');

    // Ajouter la nouvelle figure à chaque conteneur
    galleries.forEach(gallery => {
        gallery.appendChild(nouvelleFigure.cloneNode(true));
    });

    console.log(`Une nouvelle figure avec l'id ${projetId} a été ajoutée.`);
};