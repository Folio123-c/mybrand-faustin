let blogIndex=localStorage.getItem('index');
let allblogs = JSON.parse(localStorage.getItem('published_posts'));

let title = document.getElementById("nano");

let content=document.getElementById("mess");

title.innerHTML=allblogs[blogIndex].title;
content.innerHTML=allblogs[blogIndex].content;