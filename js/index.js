function adminRetrieveBlogs(){
    let blogsContainer = document.querySelector('.flex-container');
    let allblogs=JSON.parse(localStorage.getItem('published_posts'));
    let blogId;
    for(let i = allblogs.length - 1; i >= 0; i--){
        console.log(allblogs[i].index);
        let blog = `<div class="item1"><h2>${allblogs[i].title}<br><br><br><br></h2>
    <p>${allblogs[i].content} </p><br>
        <div>
            <button class="btn" type="submit">Read more</button>
        </div>
</div>`
        blogsContainer.innerHTML += blog;
    }
}


