
let title= document.querySelectorAll('#blog-title');
let content= document.querySelectorAll('#blog-p')
let blog=document.querySelectorAll('#blogs')

let allblogs=JSON.parse(localStorage.getItem('published_posts'))
console.log("allblogs");
console.log(allblogs);
for(let i=title.length - 1; i>=0; i--) {
    title[i].innerHTML=allblogs[i].title;
    content[i].innerHTML=allblogs[i].content;
}
// let i = allblogs.length - 1; i >= 0; i--
// let i=title.length - 1; i>=0; i--