function adminRetrieveBlogs(){
    let blogsContainer = document.querySelector('.blogs-all');
    let blogId;
    const token = JSON.parse(localStorage.getItem('token'));
    let count = 0;

    fetch("https://mybrand-faustin.cyclic.app/api/v1/draft", {
        headers: {
            "Authorization": token
        }
    })
        .then((resp) => {
            return resp.json();
        })
        .then((data) => {
            // console.log(data.data);
            const allblogs = data.data;
    for(let i = allblogs.length - 1; i >= 0; i--){
        let blog = `<div class="blogs" id="blogs">
                <div class="title"><span id="blog-title">${allblogs[i].title}</span><br>
                     <span id="image"><img src="${allblogs[i].image}" style= "width:150px; height:150px; border-radius: 23px;"></span>
                    <p id="blog-p">${allblogs[i].content}</p>
                    <button type="button" onclick="redirectToEddBog('${allblogs[i]._id}')">Edit</button>
                      <button class="delete" id=${i} type="button" onclick="deleteBlog('${allblogs[i]._id}')">Delete</button>
                    </div>
              </div>`
        blogsContainer.innerHTML += blog;
    }
        })
.catch((error) => alert(error));
}



async function deleteBlog(index){
    console.log(index);
    const token = JSON.parse(localStorage.getItem('token'));
    await fetch(`https://mybrand-faustin.cyclic.app/api/v1/draft/${index}`, {
        method: "DELETE",
        headers: {
            "Authorization": token
        }
    })
        .then((resp) => {
            return resp.json();
        })
        .then((data) => {
            console.log(data);
            // alert(data.message);
        })
        .catch((error) => alert(error));

    alert("Blog has been deleted successfully")
    window.location.reload();
}

async function  editBlog(){
    // alert("Editing blog")
    let blogTitle = document.getElementById('name');
    let image = document.getElementById('image');
    let blogContent = document.getElementById('message');

    let urlParams = new URLSearchParams(window.location.search);
    let action = urlParams.get('action');
    let urlParamsId = new URLSearchParams(window.location.search);
    let blogId = urlParamsId.get('id');
    const token = JSON.parse(localStorage.getItem('token'));

    if(action === 'edit'){
        // get blog

        await fetch(`https://mybrand-faustin.cyclic.app/api/v1/blogs/${blogId}`, {
        })
            .then((resp) => {
                return resp.json();
            })
            .then((data) => {
                console.log("retrieved", data);
                const allBlogs = data.data
                // alert(data.message);
                document.getElementById('editTitle').textContent = 'Edit blog';
                document.getElementById('draft').textContent = 'Update';
                document.getElementById('publish').textContent = 'publish';
                    blogTitle.value = allBlogs.title;
                    image.value = allBlogs.image;
                    blogContent.innerHTML = allBlogs.content;

            })
            .catch((error) => alert(error));


    } else {

    }
}
function redirectToEddBog(blogId){
    window.location.href = `./addblog.html?action=edit&id=${blogId}`
}

// function  editBlogPub(){
//     // alert("Editing blog")
//     let blogTitle = document.getElementById('name');
//     let blogContent = document.getElementById('message');
//     let urlParams = new URLSearchParams(window.location.search);
//     let action = urlParams.get('action');
//     let urlParamsId = new URLSearchParams(window.location.search);
//     let blogId = urlParamsId.get('id');
//     if(action === 'edit'){
//         let allBlogs = JSON.parse(localStorage.getItem('published_posts'));
//         console.log(allBlogs);
//         for(let i = allBlogs.length - 1; i >= 0 ; i--){
//             if(i === Number(blogId)) {
//                 document.getElementById('editTitle').textContent = 'Edit blog';
//                 document.getElementById('draft').textContent = 'Update';
//                 document.getElementById('publish').textContent = 'publish';
//                 blogTitle.value = allBlogs[i].title;
//                 blogContent.innerHTML = allBlogs[i].content;
//
//             }
//         }
//     }
// }

