// function logedin(event) {
//     event.preventDefault(); // prevent the form from submitting
//
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;
//
//     const response = fetch("https://mybrand-faustin.cyclic.app/api/v1/login", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password }),
//     });
//     response.then(res => res.json())
//         .then(data => {
//             localStorage.setItem('token', JSON.stringify(data.token))
//             window.location.href = "dashbordyy.html"; // redirect to dashboard page
//         })
//         .catch((error) => alert(error));
// }
//
//
// const form = document.getElementById("login-form");

// add event listen
// form.addEventListener("submit", (e) => {
//     e.preventDefault();
    //grad values
async function userLogin(){
    const emailValue = document.getElementById("email").value
    const passwordValue = document.getElementById("password").value
    const data = {email: emailValue, password: passwordValue}
    // use fetch method to interact with your login api endpoint
    await fetch('https://mybrand-faustin.cyclic.app/api/v1/login', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then ((response) => response.json())
        .then((data) => {
            console.log(data)
            if (data.token) {
                // set our token in LS
                localStorage.setItem('token', JSON.stringify(data.token))
                alert(data)
                location.href="dashbordyy.html" ; // redirect to dashboard page
            } else {
                alert("Failed to login")
            }
        })
        .catch(err => alert(err))
};

// function userLogin(){
//     console.log('Called')
// }