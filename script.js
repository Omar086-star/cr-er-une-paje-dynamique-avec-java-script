/*
1 - update
2 - displayProjet
3 - rendrePhoto
4 - getCategorys
5 - AffucherProjets
6 - butColor
7 - removeActive
8 - ajoutButton
9 - filtreProjets
10- clickModifier
11- rendreMiniGallery
12- displayModaleAjouter
13- supprimerProjetsBack
14- supprimerProjet
15- clickDeAjoute
16- ajouteOptions
17- ajouterProjet         

*/

update();
const main = document.querySelector(".main");

async function getGalleryProjets() {

  var obj = [];

  const response = await fetch("http://localhost:5678/api/works");
  const result = await response.json();

  return result;
}
// function update la paje et vider le filtre
function update() {
  const clickLogInHead = document.getElementById("click-login");
  if (window.localStorage.getItem("userToken")) {
    clickLogInHead.innerText = "logout";

    const filtreVide = document.getElementById("filtreVide");
    filtreVide.style.display = "none";
    //   filtreVide.classList.toggle('hidden');
    //         filtreVide.innerHTML='';
    const divPro = document.getElementById("divPro");
    divPro.style.display = "contents";
    //   const contrPro = document.querySelector('.butt');
    //   filtreVide.style.visibility('hidden');
    const modeEdition = document.querySelector(".modeEdition");
    modeEdition.style.display = "flex";
  } else {
    clickLogInHead.innerText = "login";
  }
  clickLogInHead.addEventListener("click", () => {
    window.localStorage.removeItem("userToken");
    window.location.href = "login.html";
  });
}
// function pour récupérer la function de getGalleryProjets
async function displayProjet() {
  const projets = await getGalleryProjets();
  projets.forEach((projet) => {
    rendrePhoto(projet.imageUrl, projet.title, projet.id);
  });
}
displayProjet();
// function pour créer les éléments qui affichent les données récupères de l'API


function rendrePhoto(src, title, projetId) {
  const gallery = document.getElementById("gallery");
  const figure = document.createElement("figure");
  figure.setAttribute("data-id", projetId);
  const img = document.createElement("img");
  const figcaption = document.createElement("figcaption");

  img.src = src;
  img.alt = title;
  figcaption.innerText = title;

  figure.appendChild(img);
  figure.appendChild(figcaption);
  gallery.appendChild(figure);
}
//function pour récupérer les categorys de l'api
async function getCategorys() {
  try {
    const response = await fetch("http://localhost:5678/api/categories");
    const data = await response.json();
    return data;
  } catch (error) {
  }
}

getCategorys().then((categories) => console.log(categories) );
//function pour afficher les Projets en gallery
async function afficherProjets() {
  const gallery = document.getElementById("gallery");
  const body = document.querySelector("body");
}
//function pour changer les colors de buttons de filtres de gallery
function butColor() {
  const fil = document.querySelector(".filtre");
  const bs = document.querySelectorAll(".trier");

  fil.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
      bs.forEach((button) => {
        button.classList.remove("active");
      });

      // Ajouter la classe 'active' au bouton cliqué
      const clickedButton = event.target;
      clickedButton.classList.add("active");
    }
  });
}
//function pour supprimer la classe active de button 'tous sur gallery
function removeActive() {
  const contrPro = document.querySelector(".contrPro");
  contrPro.classList.remove("active");
}
//function pour ajouter les buttons de filltre sur gallery dynamiquement
async function ajouteButtons() {
  const categorys = await getCategorys();
  const filT = document.querySelector(".filtre");

  categorys.forEach((category) => {
    const button = document.createElement("button");
    button.textContent = category.name;
    button.id = category.id;

    button.classList.add("trier");
    filT.appendChild(button);
  });
}
const gallery = document.querySelector(".gallery"); // Assurez-vous que le sélecteur est correct
//function pour filtrer les photos sur le gallery
async function filtreProjets() {
  const result = await getGalleryProjets().then((result) => {
    const m = result;
    const toBack = m.filter((projet) => projet.categoryId !== "0");

    const btns = document.querySelectorAll(".filtre button");
    const button = document.querySelector(".trier");
    btns.forEach((button) => {
      button.addEventListener("click", (event) => {
        event.preventDefault();
        const buttonId = event.target.id;

        var rendre = result;

        if (buttonId !== "0") {
          const rendre1 = m.filter(
            (test) => test.categoryId === Number(buttonId)
          ); // Number(buttonId)    );
          gallery.innerHTML = "";

          afficherProjets(rendre1);
          butColor();
          removeActive();

          rendre1.forEach((projet) =>
            rendrePhoto(projet.imageUrl, projet.title, projet.id)
          );
        } else {
          gallery.innerHTML = "";

          afficherProjets(m);

          m.forEach((projet) =>
            rendrePhoto(projet.imageUrl, projet.title, projet.id)
          );
        }
      });
    });
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  await ajouteButtons();
  filtreProjets();
});
//function pour afficher et disparer les modales
function clickModifier() {
  const proClick = document.querySelector(".pourModifier");
  const modale = document.querySelector(".modale");
  const cancel = document.querySelector(".fa-xmark");

  proClick.addEventListener("click", () => {
    modale.style.display = "block";
  });
  cancel.addEventListener("click", () => {
    modale.style.display = "none";
  });
}
clickModifier();
//function pour afficher  le modales mini Gallery
async function rendreMiniGallery() {
  const miniGallery = document.querySelector(".miniGallery");
  miniGallery.innerHTML = "";

  const mini = await getGalleryProjets();
  mini.forEach((projet) => {
    var figure = document.createElement("figure");
    figure.setAttribute("data-id", projet.id);

    var img = document.createElement("img");
    var span = document.createElement("span");
    var suppr = document.createElement("i");
    suppr.id = projet.id;
    // Ajout des classes
    span.classList.add("spanSuprim");
    suppr.classList.add("fa-regular", "fa-trash-can");

    // Style de l'image
    img.style.width = "100%";
    img.style.height = "100%";

    // Style de la figure
    figure.style.width = "87px";
    figure.style.height = "130px";
    figure.style.position = "relative";
    figure.classList.add("responseveClassFig");
    // Style du bouton de suppression
    suppr.style.color = "#ffffff";
    suppr.style.fontSize = "9px";
    suppr.style.position = "absolute";
    suppr.style.top = "3px";
    suppr.style.right = "3px";

    // Style du span
    span.style.zIndex = "2";
    span.style.backgroundColor = "#000000";
    span.style.display = "flex";

    span.style.width = "15px";
    span.style.height = "15px";
    span.style.position = "absolute";
    span.style.top = "8px";
    span.style.right = "5px";
    // Définir la source et l'alt de l'image
    img.src = projet.imageUrl;
    img.alt = projet.title;
    img.classList.add("responseveClassImg");
    // Assembler les éléments
    span.appendChild(suppr);
    figure.appendChild(img);
    figure.appendChild(span);
    miniGallery.appendChild(figure);
  });
   supprimerProjetsBack();
}

rendreMiniGallery();

//function pour afficher  le modales d'ajouter les projets
function displayModaleAjouter() {
  const modale = document.querySelector(".modale");
  const modaleAjouter = document.getElementById("modaleAjouter");
  const iconLeft = document.getElementById("icoLeft");
  const iconRigt = document.getElementById("icoRight");
  const btnMdlePjt = document.getElementById("buttonModaleProjet");

  btnMdlePjt.addEventListener("click", () => {
    modaleAjouter.style.display = "block";
    modale.style.display = "none";
  });
  iconLeft.addEventListener("click", () => {
    modaleAjouter.style.display = "none";
    modale.style.display = "block";
  });
  iconRigt.addEventListener("click", () => {
    modaleAjouter.style.display = "none";
  });
}
displayModaleAjouter();

//function pour supprimer  les projets sur le mini gallery
async function supprimerProjetsBack() {
  const loged = window.localStorage.getItem("userToken");
  const supprs = document.querySelectorAll(".fa-trash-can");
  supprs.forEach((suppr) => {
    suppr.addEventListener("click", () => {
      const id = suppr.id;
      const init = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${loged}`,
        },
      };

      fetch("http://localhost:5678/api/works/" + id, init)
        .then((response) => {
          if (loged === "true") {
            // Corrected comparison operator
            if (!response.ok) {
              return response.json();
            } else {
        return response.json();

            }
          }
        })
        .then((data) => {

          supprimerProjet(id);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    });
  });
}
//function pour supprimer  les projets sur le dom
function supprimerProjet(projetId) {

  // Sélectionner tous les éléments de projet sur la page d'accueil et dans la modale
  const elementsProjet = document.querySelectorAll(
    `.gallery figure[data-id='${projetId}'], .contentModale figure[data-id='${projetId}']`
  );

  // Parcourir chaque élément trouvé et le supprimer du DOM
  elementsProjet.forEach((element) => {
    element.parentNode.removeChild(element);
  });

}

//  function d'ajouter les photos et changer les buttons
function imagesModale() {
  const imageModale = document.getElementById("imageModale");
  const labelFile = document.getElementById("labelFile");
  const inFile = document.querySelector(".containerModale .inFile");
  const iconImageFile = document.getElementById("iconImageFile");
  const megaBite = document.getElementById("megaBite");
  const buttonModaleAjout = document.getElementById("buttonModaleAjout");
  inFile.addEventListener("change", () => {
    const file = inFile.files[0];
    const reader = new FileReader();
    reader.onload = function (e) {
      imageModale.src = e.target.result;
      imageModale.style.display = "flex";
      labelFile.style.display = "none";
      iconImageFile.style.display = "none";
      megaBite.style.display = "none";
    };
    reader.readAsDataURL(file);
  });
}
imagesModale();

// changer le color de button d ajouter
function clickDeAjoute() {
  const formMod = document.getElementById("formMod");
  const inFile = document.querySelector(".inFile");
  const inTitle = document.querySelector(".inTitle");
  const selected = document.querySelector(".selected");
  const buttonModaleAjout = document.getElementById("buttonModaleAjout");

  formMod.addEventListener("input", () => {
    if (inFile.value !== "" && inTitle.value !== "" && selected.value !== "") {
      buttonModaleAjout.style.backgroundColor = "#1D6154";
      buttonModaleAjout.style.color = "#ffffff";
      buttonModaleAjout.style.cursor = "pointer";
    } else {
    }
  });
}
clickDeAjoute();


function ViderLeModale() {
    const formMod = document.getElementById("formMod");
    const inTitle = document.querySelector(".inTitle");
    const selected = document.querySelector(".selected");
    const iconR = document.getElementById("icoRight");
    const buttonModaleAjout = document.getElementById("buttonModaleAjout");
    const imageModale=document.getElementById('imageModale')
    const labelFile = document.getElementById("labelFile");
    const inFile = document.querySelector(".containerModale .inFile");
    const iconImageFile = document.getElementById("iconImageFile");
    const megaBite = document.getElementById("megaBite");


    function resetForm() {
        inFile.value = "";
        inTitle.value = "";
        selected.value = "";
    labelFile.style.display = "block";
    iconImageFile.style.display = "block";
    megaBite.style.display = "flex";
        imageModale.style.display='none';
        buttonModaleAjout.style.backgroundColor = "#ffffff";
        buttonModaleAjout.style.color = "#1D6154";
        buttonModaleAjout.style.cursor = "initial";
    }

    // Event listener pour le submit du formulaire
    formMod.addEventListener('submit', (event) => {
        event.preventDefault(); // Empêche le comportement par défaut du formulaire
        resetForm();
    });

    // Event listener pour le clic sur l'icône
    iconR.addEventListener('click', (e) => {
        e.preventDefault(); // Empêche le comportement par défaut du lien
        resetForm();
    });
}

document.addEventListener('DOMContentLoaded', ViderLeModale);

// ajouter les options dynamiquement
async function ajouteOptions() {
  const selected = document.querySelector(".formModale .selected");
  const categorys = await getCategorys();
  categorys.forEach((category) => {
    const option = document.createElement("option");
    option.value = category.id;
    option.textContent = category.name;
    selected.appendChild(option);
  });
}
ajouteOptions();

// function pour faire la methode de post pour ajouter la photo
function postProjet() {
  const formMod = document.getElementById("formMod");
  const title = document.querySelector(".formModale #title");
  const category = document.querySelector(".formModale #category");
  const loged = window.localStorage.getItem("userToken");
  formMod.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(formMod);

    fetch("http://localhost:5678/api/works", {
      method: "POST",
      body: formData,
      headers: {
        // "Content-Type": "application/json",
        Authorization: `Bearer ${loged}`,
      },
    })
      .then((response) => response.json())

      .then((projet) => {
        getGalleryProjets();
        rendreMiniGallery();
        ajouterProjet(projet.id, projet.imageUrl, projet.title, projet.title);
      })

      .catch((error) => {
      });
  });
}
postProjet();
// function pour ajouter une photo sur le gallery et l'appeler sur la function post projet
function ajouterProjet(projetId, imgSrc, imgAlt, figCaption) {
  // Créer une nouvelle figure
  const nouvelleFigure = document.createElement("figure");
  nouvelleFigure.setAttribute("data-id", projetId);

  const nouvelleImage = document.createElement("img");
  nouvelleImage.src = imgSrc;
  nouvelleImage.alt = imgAlt;

  const nouvelleFigcaption = document.createElement("figcaption");
  nouvelleFigcaption.textContent = figCaption;

  nouvelleFigure.appendChild(nouvelleImage);
  nouvelleFigure.appendChild(nouvelleFigcaption);

  // Sélectionner les conteneurs où la figure doit être ajoutée
  const galleries = document.querySelectorAll(".gallery");

  // Ajouter la nouvelle figure à chaque conteneur
  galleries.forEach((gallery) => {
    gallery.appendChild(nouvelleFigure.cloneNode(true));
  });

}
