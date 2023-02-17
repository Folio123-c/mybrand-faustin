const email = document.getElementById('email');
const password = document.getElementById('password');
const login = document.getElementById('login');


users = JSON.parse(localStorage.getItem('users')) || [];

function signIn() {
    // check if user exists
    const targetUser = users.find(user => user.email == email.value);
    if(targetUser && targetUser.password == password.value) {
        localStorage.setItem('currentUser', JSON.stringify(targetUser))
        window.location.href="./dashbordyy.html";
    } else if(targetUser && targetUser.password != password.value) {
        alert('wrong password');
    } else {
        // user doesn't exist
        alert('Not registered, please signup');
        window.location.href ="./signup.html";
    }
}
login.onclick = signIn;
