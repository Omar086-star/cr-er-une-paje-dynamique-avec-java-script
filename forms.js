const form = document.getElementById('formModale');
const messageErreur = document.getElementById('messageErreur');
// function de login 
async function funLog() { 

    // Add event listener for form submission

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

                         window.location.href = "index.html"; // Redirect to the desired page
                        // viderAfficher();
                    } else   {
                        const messagErreur = document.getElementById('messagErreur');
                        messagErreur.innerText='Votre mail ou mot de passe est inccorect';
                    }
        });
}

funLog();


 




document.addEventListener("DOMContentLoaded", function() {
    function scrollToElementById(id) {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    function handleScrollTo() {
        const urlParams = new URLSearchParams(window.location.search);
        const scrollToId = urlParams.get('scrollTo');
        if (scrollToId) {
            scrollToElementById(scrollToId);
        }
    }

    handleScrollTo();
});
