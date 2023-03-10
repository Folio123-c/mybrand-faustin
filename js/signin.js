function logedin(event) {
    event.preventDefault(); // prevent the form from submitting

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const response = fetch("https://mybrand-faustin.cyclic.app/api/v1/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    });
    response.then(res => res.json())
        .then(data => {
            localStorage.setItem('token', JSON.stringify(data.token))
            window.location.href = "dashbordyy.html"; // redirect to dashboard page
        })
        .catch((error) => alert(error));
}
