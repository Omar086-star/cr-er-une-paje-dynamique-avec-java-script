const form = document.getElementById('formModale');
const messageErreur = document.getElementById('messageErreur');
// function de login 
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

funLog();