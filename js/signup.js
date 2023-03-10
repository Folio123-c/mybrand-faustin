const formSignUp = document.querySelector("#formSignUp");
formSignUp.addEventListener("submit", (event) => {
    event.preventDefault();

    //get data from user
    const firstname = document.getElementById("fname").value;
    const lastname = document.getElementById("sname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const data = { firstname, lastname, email, password };
    //interacy with endpoint
    fetch("https://mybrand-faustin.cyclic.app/api/v1/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then((resp) => {
            return resp.json();
        })
        .then((data) => {
            alert(data.message);
        })
        .catch((error) => {
            console.error(error);
            alert("An error occurred during sign-up. Please try again later.");
        });
});
