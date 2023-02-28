function adminRetrieveBlogs(){
    let blogsContainer = document.querySelector('.blogs-all');
    let allblogs=JSON.parse(localStorage.getItem('messageboxes'));
    let blogId;
    for(let i = allblogs.length - 1; i >= 0; i--){
        console.log(allblogs[i].index);
        let blog = `<div class="blogs">
    <div class="title"><span id="blog-title">Message</span> <br>
        <p id="blog-p"><div>Name :    ${allblogs[i].username}</div><br>
            <div>Email :   ${allblogs[i].email}</div><br>
            <div>Message:   ${allblogs[i].message}</div></p>
        <br>

            <button type="button" onClick="deleteBlog('${i}')">Delete</button>
    </div>
</div>`
        blogsContainer.innerHTML += blog;
    }
}
function deleteBlog(index){
    let allBlogs = JSON.parse(localStorage.getItem('messageboxes'));
    allBlogs.splice(index, 1);
    localStorage.setItem('messageboxes', JSON.stringify(allBlogs));
    window.location.reload();
}
