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
                alert(data.message)
                location.href="dashbordyy.html" ; // redirect to dashboard page
            } else {
                alert(data.message)
            }
        })
        .catch(err => alert(err))
};

