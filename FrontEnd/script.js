 update();
async function getGalleryProjets (){
console.log(window.localStorage.getItem("userToken"))

   var obj = []; 
    
   const response = await fetch('http://localhost:5678/api/works')
   const result =  await response.json()
//    response => response.json();
//     // obj = JSON.parse(response.text());
//         if (!response.ok) {
//             throw new Error('Network response was not ok ' + response.statusText);
//         }
        return result ;
    
    }

function update(){
    const clickLogInHead= document.getElementById('click-login');
    if(window.localStorage.getItem("userToken")){
      clickLogInHead.innerText='logout';  
      
      const filtreVide=document.getElementById('filtreVide');
      filtreVide.classList.toggle('hidden');
            filtreVide.textContent='';
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
// dataDeDivs.forEach(figure => rendrePhoto(figure.src, figure.alt, figure.caption));


async function getCategorys(){
const response = await fetch("http://localhost:5678/api/categories");
return await response.json();
}
getCategorys()

async function afficherProjets(projets){
const gallery = document.getElementById('gallery');
const portfolio = document.getElementById('portfolio')
portfolio.appendChild(gallery)
gallery.innerHTML='';

 };

 function butColor( ) {
    const buttons = document.querySelectorAll('.filtre .butt');
    categoryId=butt.id;

buttons.forEach(butt => {
butt.addEventListener('click', () => {
    if(bu==='0'){
        butt.classList.add('active');
    }else if (categoryId==='1' ){
        butt.classList.add('active');
    }else if (categoryId==='2' ){
        butt.classList.add('active');
    }else if (categoryId==='3' ){
        butt.classList.add('active');
    }
});
});
};
butColor( );

function filtreProjets() {
getGalleryProjets().then(result=>{
const m = result;
const toBack = m.filter(test=> test.categoryId !== 0);
toBack.forEach(projet=>rendrePhoto(projet.imageUrl , projet.title  , projet.id));

const buttons = document.querySelectorAll('.filtre button');
const buttNo = document.querySelector('.butt');
buttons.forEach(button =>{ 
button.addEventListener('click', (event)=>{

event.preventDefault();
const categoryId = button.id;
var rendre= result;
if(categoryId ==="0" ){
const rendre = m.filter(test=> test.categoryId !== 0);

 
//     } else {
//     button.classList.remove('active');
//     button.classList.add('buttNO');
//     }
afficherProjets(result);
console.log("aller");
  console.log(result);

rendre.forEach(projet=>rendrePhoto(projet.imageUrl ,  projet.title , projet.id));

}else{

const rendre1 = m.filter(test=> test.categoryId === Number(categoryId));
afficherProjets(m);
console.log(categoryId);

console.log(m.filter(test=> test.categoryId=== Number(categoryId)));

rendre1.forEach(projet=>rendrePhoto(projet.imageUrl , projet.title , projet.title ));

}

} ) });


} ) 
 }

filtreProjets();


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
        span.style.height = '15px'; // Ajouter une hauteur pour que le span soit visible
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
    // Sélectionner tous les éléments de projet sur la page d'accueil et dans la modale
    const elementsProjet = document.querySelectorAll(`.gallery[data-id='${projetId}'], .contentModale[data-id='${projetId}']`);
console.log(elementsProjet)
    // Parcourir chaque élément trouvé et le supprimer du DOM
    elementsProjet.forEach(element => {
        element.parentNode.removeChild(element);
    });
    rendreMiniGallery();
    getGalleryProjets();

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
 buttonModaleAjout.style.backgroundColor='#1D6154'
 buttonModaleAjout.style.color='#ffffff'

    }
    reader.readAsDataURL(file);
});


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

.then(category => {
console.log(category);
console.log('La photo a été ajoutée avec succès', category);
getGalleryProjets(); 
rendreMiniGallery(); 
 })
 
.catch(error => {
console.error('Erreur:', error);
});
});


 // {
    //     title:title.value,
    //     category:category.value,
    //     imageUrl:imageModale.src,
    //     category:{
    //         id:category.value,
    //         name:category.option[category.selectedIndex].textContent,
    //     }
    // }



// function viderAfficher(){
    // rendre.forEach(projet=>rendrePhoto(projet.imageUrl , projet.title , projet.title ));

//     const filtreVide=document.getElementById('filtreVide');
//     filtreVide.style.display('none');

// const title= document.querySelector('.sujet');
// const icoPro=document.createElement('i');
// icoPro.classList.add('fa-regular ',' fa-pen-to-square',' disIn')
// title.appendChild(icoPro);

// const spanPro=document.createElement('span');
// spanPro.classList.add('disIn', 'c1D6154',' fs-14'); 
// spanPro.innerText='modifier'
// title.appendChild(spanPro);

// };






// function DataForm(){
// if(data.token.ok){
//     // console.log("Connected", data);
//     // localStorage.setItem("userToken", data.token);
//     // window.location.href = "index.html"; // Redirect to the desired page
//     window.sessionStorage.loged=true;
//     const loginBtn = document.querySelector('.login-button');
//     let loginHead = document.getElementById('click-login');

// loginBtn.addEventListener("change", function () {
// loginHead.innerText = 'Logout';
// viderAfficher()
//     });
//     loginHead.addEventListener("click", () => {
//         window.sessionStorage.loged = false;
//       });

//     // Update the login section
//     const sectionLogin = document.querySelector('.login');
//     sectionLogin.innerHTML = "<p>Vous êtes déjà connecté</p>";
// }
// }
// DataForm()


// 



// function checkLoginStatus() {
//     const loged = window.sessionStorage.getItem("loged") === "true";
//     const loginHead = document.getElementById('click-login');
//     const sectionLogin = document.querySelector('.login');

//     if (loged) {
//         loginHead.innerText = 'Logout';
//         loginHead.addEventListener("click", () => {
//             window.sessionStorage.removeItem("loged");
//             localStorage.removeItem("userToken");
//             window.location.reload(); // Reload the page to reflect the logout
//         });
//         sectionLogin.innerHTML = "<p>Vous êtes déjà connecté</p>";
//     }
// }

// // Function to replace filters with icon and span
// function viderAfficher() {
//     const filtreVide = document.getElementById('filtreVide');
//     filtreVide.innerHTML = '';

//     const title = document.querySelector('.sujet');

//     const icoPro = document.createElement('i');
//     icoPro.classList.add('fa-regular', 'fa-pen-to-square', 'disIn');
//     title.appendChild(icoPro);

//     const spanPro = document.createElement('span');
//     spanPro.classList.add('disIn', 'c1D6154', 'fs-14');
//     spanPro.innerText = 'modifier';
//     title.appendChild(spanPro);
// }

// // Function to handle data form logic
// function DataForm() {
//     const loginBtn = document.querySelector('.login-button');
//     let loginHead = document.getElementById('click-login');

//     loginHead.innerText = 'Logout';
//     loginBtn.addEventListener("click", () => {
//         window.sessionStorage.removeItem("loged");
//         localStorage.removeItem("userToken");
//         window.location.reload(); // Reload the page to reflect the logout
//     });

//     // Update the login section
//     const sectionLogin = document.querySelector('.login');
//     sectionLogin.innerHTML = "<p>Vous êtes déjà connecté</p>";
//     viderAfficher();
// }

// // Call the function to check login status on page load
// checkLoginStatus();
