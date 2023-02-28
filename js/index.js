 function adminRetrieveBlogs(){

    let blogsContainer = document.querySelector('.flex-container');
    let allblogs=JSON.parse(localStorage.getItem('published_posts'));
    let blogId;
    for(let i = allblogs.length - 1; i >= 0; i--){

        // console.log(allblogs[i].index);
        let blog = `<div class="item1"><h2>${allblogs[i].title}<br><br></h2>
    <p>${allblogs[i].content} </p><br>
        <div>
            <a href="./fullView.html"> <button class="btn" type="submit" id="${i}">Read more</button></a>
        </div>
</div>`
        blogsContainer.innerHTML += blog;
    }
 }
let button=document.querySelectorAll('.btn')
console.log(button.length);
    for(let i=0; i<button.length; i++){
        button[i].addEventListener('click',()=>{
            console.log(button[i])
            let index=button[i].getAttribute('id')
            localStorage.setItem('index',index);
        })
    }

