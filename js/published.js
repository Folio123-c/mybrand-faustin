function adminRetrieveBlogs(){
    let blogsContainer = document.querySelector('.blogs-all');
    let allblogs=JSON.parse(localStorage.getItem('published_posts'));
    let blogId;
    for(let i = allblogs.length - 1; i >= 0; i--){
        console.log(allblogs[i].index);
        let blog = `<div class="blogs" id="blogs">
        <div class="title"><span id="blog-title">${allblogs[i].title}</span>
          <p id="blog-p">${allblogs[i].content}</p>
        <button type="button" onclick="redirectToEddBog('${i}')">Edit</button> 
          <button class="delete" id=${i} type="button" onclick="deleteBlog('${i}')">Delete</button>
        </div>
      </div>`
        blogsContainer.innerHTML += blog;
    }
}


function deleteBlog(index){
    let allBlogs = JSON.parse(localStorage.getItem('published_posts'));
    allBlogs.splice(index, 1);
    localStorage.setItem('published_posts', JSON.stringify(allBlogs));
    window.location.reload();
}

let blogAction = '';

function redirectToEddBog(blogId){
    window.location.href = `./addblog.html?action=edit&id=${blogId}`
}


