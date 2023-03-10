async function logedin(event) {
    event.preventDefault(); // prevent the form from submitting

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const response = await fetch("https://mybrand-faustin.cyclic.app/api/v1/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (response.ok) {
        console.log(data)
        alert(data.message); // display success message
        window.location.href = "dashbordyy.html"; // redirect to dashboard page
    } else {
        alert(data.message); // display error message
    }
}
