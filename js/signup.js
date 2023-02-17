// identify forminput field values by time of clicking submit
const nameField = document.getElementById('fname');
const nameField2 = document.getElementById('sname');
const emailField = document.getElementById('email');
const password = document.getElementById('password');
// signup button
const signup = document.getElementById('signup');


users = JSON.parse(localStorage.getItem('users')) || [];

function saveUser() {
    const email = emailField.value;
    // check if the user with the given email already exists in local storage
    const userExists = users.some(user => user.email === email);
    if (userExists) {
        alert('User with this email already exists. Please use a different email address.');
        return;
    }
    let user = {};
    user.firstName = nameField.value;
    user.lastName = nameField2.value;
    user.email = emailField.value;
    user.password = password.value;
    users.push(user);
    const stringUsers = JSON.stringify(users);
    localStorage.setItem('users', stringUsers);
}
signup.onclick = saveUser;