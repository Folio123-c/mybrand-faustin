const emailField = document.getElementById('email');
const nameField = document.getElementById('name');
const message = document.getElementById('messages');
// submit button
const submit = document.getElementById('send');

let messageboxes = JSON.parse(localStorage.getItem('messageboxes')) || [];

function sendMessage() {
    let messagebox = {};
    messagebox.email = emailField.value;
    messagebox.username = nameField.value;
    messagebox.message = message.value;

    messageboxes.push(messagebox);
    localStorage.setItem('messageboxes', JSON.stringify(messageboxes));
}

submit.onclick = sendMessage;
