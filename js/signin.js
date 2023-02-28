// const email = document.getElementById('email');
// const password = document.getElementById('password');
// const login = document.getElementById('login');


users = JSON.parse(localStorage.getItem('users')) || [];
console.log(users)

// function signIn() {
//
//     // check if user exists
//     const targetUser = users.find(user => user.email == email.value);
//     console.log(targetUser);
//
//     if(targetUser.password != "" )  {
//    alert("user available")
//         // localStorage.setItem('currentUser', JSON.stringify(targetUser))
//         window.location.href="./dashbordyy.html"
//     }
//     else if(targetUser && targetUser.password != password.value) {
//         alert('password or email is wrong');
//     }
//     else {
//         // user doesn't exist
//         alert('Not registered, please signup');
//         window.location.href ="./signup.html"
//     }
// }
//
// function ValidateEmail(inputText)
// {
//     var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     if(inputText.value.match(mailformat))
//     {
//         document.form.email.focus();
//         return true;
//     }
//     else
//     {
//         alert("Please enter valid email");
//         document.form.email.focus();
//         return false;
//     }
// }
// login.onclick = signIn;
// alert("clicked")
// const button=document.getElementById("login");
// button.addEventListener('click',function (){
//     window.location.href="./dashbordyy.html"
// })
function logedin(){
    // check if user exists
    let password=document.getElementById("password");
    let targetUser = users.find(user => user.password == password.value);
    console.log("Target user"+targetUser);

    if(targetUser)  {
        // localStorage.setItem('currentUser', JSON.stringify(targetUser))
        return true;
    }
    else{
        alert("Wrong credentials\n\n or sign up");
        // console.log("Password" + targetUser.password);
    }
    return false;
}
