// const emailField = document.getElementById('email');
// const nameField = document.getElementById('name');
// const message = document.getElementById('messages');
// // submit button
// const submit = document.getElementById('send');
//
// let messageboxes = JSON.parse(localStorage.getItem('messageboxes')) || [];
//
// function sendMessage() {
//     let messagebox = {};
//     messagebox.email = emailField.value;
//     messagebox.username = nameField.value;
//     messagebox.message = message.value;
//
//     messageboxes.push(messagebox);
//     localStorage.setItem('messageboxes', JSON.stringify(messageboxes));
// }
//
// submit.onclick = sendMessage;
const formSignUp = document.querySelector("#formMessage");
formSignUp.addEventListener("submit", (event) => {
    event.preventDefault();

    //get data from user
    const email= document.getElementById('email').value;
    const username = document.getElementById('name').value;
    const message = document.getElementById('messages').value;

    const data = { email, username, message};
    //interacy with endpoint
    fetch("https://mybrand-faustin.cyclic.app/api/v1/message", {
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
        .catch((error) => alert(error));
});