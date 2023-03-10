
// let title= document.querySelectorAll('#blog-title');
// let content= document.querySelectorAll('#blog-p')
// let blog=document.querySelectorAll('#blogs')
//
// let allblogs=JSON.parse(localStorage.getItem('draft_posts'))
// console.log("allblogs");
// console.log(allblogs);
// for(let i=0; i< title.length; i++){
//     title[i].innerHTML=allblogs[i].title;
//     content[i].innerHTML=allblogs[i].content;
// }

function adminRetrieveBlogs(){
    let blogsContainer = document.querySelector('.blogs-all');
    let allblogs=JSON.parse(localStorage.getItem('draft_posts'));
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
    let allBlogs = JSON.parse(localStorage.getItem('draft_posts'));
    allBlogs.splice(index, 1);
    localStorage.setItem('draft_posts', JSON.stringify(allBlogs));
    window.location.reload();
}

let blogAction = '';

function redirectToEddBog(blogId){
    // document.getElementById('hiden-edit').textContent;
    window.location.href = `./addblog.html?action=edit&id=${blogId}`
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

        // let allBlogs = JSON.parse(localStorage.getItem('draft_posts'));
        // console.log(allBlogs);
        // for(let i = allBlogs.length - 1; i >= 0 ; i--){
        //     if(i === Number(blogId)) {
        //         document.getElementById('editTitle').textContent = 'Edit blog';
        //         document.getElementById('draft').textContent = 'Update';
        //         document.getElementById('publish').textContent = 'publish';
        //         blogTitle.value = allBlogs[i].title;
        //         blogContent.innerHTML = allBlogs[i].content;
        //
        //     }
        // }
    } else {
        // await fetch(`http://localhost:5000/api/v1/blogs`, {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //         "Authorization": token
        //     },
        //     body: JSON.stringify({title: blogTitle, image: image, content: blogContent}),
        // })
        //     .then((resp) => {
        //         return resp.json();
        //     })
        //     .then((data) => {
        //         console.log(data);
        //         // alert(data.message);
        //     })
        //     .catch((error) => alert(error));
    }
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

