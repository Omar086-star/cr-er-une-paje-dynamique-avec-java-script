// import('script.js')
// function rendreDonnes(){    
//     const head = document.querySelector('.head');
    
//     const header = document.createElement("header");
//     head.appendChild(header);

//     const h1= document.createElement("h1");
//     h1.innerText=`${"Sophie Bluel"} `;
//     header.appendChild(h1);
//     const nav = document.createElement("nav");
//     header.appendChild(nav);
    
//     const ul = document.createElement("ul");
//     nav.appendChild(ul);
    
//     const donnees=[ 
//         { type: 'text', content: 'projets' , href:'#portfolio'},
//         { type: 'text', content: 'contact' , href:'#contact'},
//         { type: 'text', content: 'login' , href:'./login.html'},
//         { type: 'img', content: './assets/icons/instagram.png' ,alt:'Instagram' }
//     ];
    
//     donnees.forEach(donnee=>{
//     const li = document.createElement("li");
//     const a = document.createElement('a');
//     li.appendChild(a);
//     if(donnee.type==='text'){
//         a.textContent = donnee.content
// a.href=donnee.href;
//     } else if(donnee.type==='img')  {
//         const img = document.createElement("img");
//     img.src=donnee.content;
//     img.alt=donnee.alt;
//     li.appendChild(img);
//     }
//     ul.appendChild(li);
    
//         });
// };
// rendreDonnes()
// // our variables
// const formLogin = document.getElementById('formModale')
// const email = document.getElementById('inputEmail')
// const password = document.getElementById('inputPWD')
// const messageErreur = document.getElementById('messageErreur')
// const seConnecter = document.getElementById('seConnecter')


// async function getUsers(){
//     const response = await fetch('http://localhost:5678/api/users/login');
//     const applicationUser= await response.json();
//     return applicationUser ;
// }

// // http://localhost:5678/api/users/login :: post

// async function loginPage(){
// const users = await getUsers();

// formLogin.addEventListener("submit", async function (e){
// e.preventDefault();
// const userEmail = email.value;
// const userPWD = password.value;
// console.log ( userEmail , '//' , userPWD);
//     let userFound = false;

// users.forEach(user => {

//     users.forEach(user => {
//         if(user.email === userEmail && user.password === userPWD  ){
// window.sessionStorage.loged=true;
//             }});
//             if(!userFound){
//     email.classList.add(messageErreur);
// password.classList.add(messageErreur);
// messageErreur.textContent='Votre email ou mot de passe est incorrect'  
//             }
//             else{
//                 window.location.href='/ dashbord/'
//             }
    

//   }
// )} )  }
// loginPage()

// const formLogin = document.getElementById('formModale');
// const modaleDeLogin=document.querySelector(".modaleDeLogin");
// const email = document.getElementById('inputEmail');
// const password = document.getElementById('inputPWD');
// const messageErreur = document.getElementById('messageErreur');
// const seConnecter = document.getElementById('seConnecter');

// seConnecter.addEventListener("submit", async function (e) {
   
//     e.preventDefault();

//     const userEmail = email.value;
//     const userPWD = password.value;
//     console.log(userEmail, '//', userPWD);

//     try {
//         const response = await fetch('http://localhost:5678/api/users/login', {
//             method: 'POST',
//             headers: {'Accept': 'application/json',
//                       'Content-Type': 'application/json' },
//             body: JSON.stringify({ email: 'sophie.bluel@test.tld', password: 'S0phie' })
//         })
//         console.log('its good')

//         if (response.ok) {
//             const data = await response.json();
//             // Assuming the response includes some indication of success
//             window.sessionStorage.setItem('token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY1MTg3NDkzOSwiZXhwIjoxNjUxOTYxMzM5fQ.JGN1p8YIfR-M-5eQ-Ypy6Ima5cKA4VbfL2xMr2MgHm4");
//             window.sessionStorage.setItem('userId', "1");

//             window.sessionStorage.loged = true;
//             window.location.href = 'index.html';  // Redirect to dashboard or another page
//         } else {
//             email.classList.add('messageInput');  // Assuming 'error' is the CSS class for error styling
//             password.classList.add('messageInput');
//             messageErreur.textContent = 'Votre email ou mot de passe est incorrect';
//         }
//     } catch (error) {
//         console.error('An error occurred:', error);
//         messageErreur.textContent = 'Une erreur est survenue. Veuillez réessayer plus tard.';
//     }
// }); 



// Change the login button to logout if the user is already logged in


/*
const admin = document.querySelector("header nav .admin");
const logout = document.querySelector("header nav .logout");

// localStorage.removeItem('userToken');
// window.location.reload(); // Reload the page to reflect the logout

if (loged == "true") {
  admin.textContent = "Admin";
  logout.textContent = "logout";
  
}
*/ 

const form = document.getElementById('formModale');
const messageErreur = document.getElementById('messageErreur');
// let token = window.localStorage.getItem("userToken");
// window.localStorage.setItem('userToken' , 'none');

async function funLog() { 

    // Add event listener for form submission
 console.log(window.localStorage.getItem("userToken"));

    if( window.localStorage.getItem("userToken") === false){
const logTest = document.getElementById('click-login');
logTest.innerText='login';
     }
     
    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        const userEmail = document.getElementById('email').value;
        const userPWD = document.getElementById('password').value;
        const user = {
            email: userEmail,
            password: userPWD,
        };
        const dataUser = JSON.stringify(user);
const response = await fetch('http://localhost:5678/api/users/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: dataUser        
            });
                        const data = await response.json();

            if (response.status === 200) {
                       window.localStorage.setItem("userToken", data.token);
                        console.log(window.localStorage.getItem("userToken"));

                         window.location.href = "index.html"; // Redirect to the desired page
                        // viderAfficher();
                    } 


        });
}

            
        // try {
            

        //     // if (!response.ok) {
        //     //     handleErrorResponse(response.status);
        //     //     throw new Error(`HTTP error! Status: ${response.status}`);
        //     //     console.log('call me');
        //     //                     console.log('you can see me')

        //     // }
          
//         
//         
        //     // if (response.status === 200) {
                
        //     //     console.log("Connected", data);
        //     //     sessionStorage.setItem("userToken", data.token);
        //     //     sessionStorage.setItem("loged", 'true');
        //     //     window.location.href = "index.html"; // Redirect to the desired page
        //     //     // viderAfficher();
        //     // } else {
        //     //     handleErrorResponse(response.status);
        //     //     localStorage.removeItem("userToken");
        //     //     messageErreur.innerText = 'Votre mail ou mot de passe est incorrect';
        //     //     const erreurInput = document.querySelector('.formModale input');
        //     //     erreurInput.classList.add('inputErreur');
        //     // }
        // } catch (error) {
        // //     console.log('call me');
        // //   console.log('you can see me')

        //     console.error('Erreur lors de la requête fetch:', error);
        // }
    

// Function to show error messages


// function showError(message) {
//     messageErreur.innerText = message;
//     messageErreur.style.color = "red";
// }

// Function to handle different error responses


// function handleErrorResponse(status) {
//     if (status === 401) {
//         console.log('call us');
//         showError("Non autorisé");
//     } else if (status === 404) {
//         console.log('call me');
//         showError("Non trouvé");
//     } else {
//         showError(`Code de statut non traité : ${status}`);
//     }
// }

// function change() {
//     const loged = localStorage.getItem("loged") === 'true';
//     const loginBtn = document.querySelector('.login-button');
//     const loginHead = document.getElementById('click-login');
//     console.log('me in 224');

//     // Initial setup based on the logged state
//     if (loged) {
//         loginHead.innerText = 'Logout';
//         loginBtn.addEventListener("click", logout);
//     } else {
//         loginHead.innerText = 'Login';
//         loginBtn.addEventListener("click", login);
//     }
// }

// function login(event) {
//     event.preventDefault();
//     // Your login logic here, e.g., authentication, fetching data, etc.
//     localStorage.setItem("loged", 'true');
//     updateUI();
// }

// function logout(event) {
//     event.preventDefault();
//     localStorage.removeItem("loged");
//     updateUI();
// }

// function updateUI() {
//     const loged = localStorage.getItem("loged") === 'true';
//     const loginBtn = document.querySelector('.login-button');
//     const loginHead = document.getElementById('click-login');

//     if (loged) {
//         loginHead.innerText = 'Loooooogout';
//         loginBtn.removeEventListener("click", login);
//         loginBtn.addEventListener("click", logout);
//         window.location.href='index.html'
//     } else {
//         loginHead.innerText = 'Login';
//         loginBtn.removeEventListener("click", logout);
//         loginBtn.addEventListener("click", login);
//     }
// }

// Call the change function to set the initial state
// change();


// change(); 
funLog();
 
 