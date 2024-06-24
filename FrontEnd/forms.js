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
                    } else   {
                        console.log('you see me ?')
                        const messagErreur = document.getElementById('messagErreur');
                        messagErreur.innerText='Votre mail ou mot de passe est inccorect';
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
 
 