// function adminRetrieveBlogs(){
//     let blogsContainer = document.querySelector('.blogs-all');
//     let allblogs=JSON.parse(localStorage.getItem('messageboxes'));
//     let blogId;
//     for(let i = allblogs.length - 1; i >= 0; i--){
//         console.log(allblogs[i].index);
//         let blog = `<div class="blogs">
//     <div class="title"><span id="blog-title">Message</span> <br>
//         <p id="blog-p"><div>Name :    ${allblogs[i].username}</div><br>
//             <div>Email :   ${allblogs[i].email}</div><br>
//             <div>Message:   ${allblogs[i].message}</div></p>
//         <br>
//
//             <button type="button" onClick="deleteBlog('${i}')">Delete</button>
//     </div>
// </div>`
//         blogsContainer.innerHTML += blog;
//     }
// }
// function deleteBlog(index){
//     let allBlogs = JSON.parse(localStorage.getItem('messageboxes'));
//     allBlogs.splice(index, 1);
//     localStorage.setItem('messageboxes', JSON.stringify(allBlogs));
//     window.location.reload();
// }

function adminRetrieveBlogs(){
    let blogsContainer = document.querySelector('.blogs-all');
    // let allblogs=JSON.parse(localStorage.getItem('published_posts'));
    let blogId;
    const token = JSON.parse(localStorage.getItem('token'));
    // let countAll = JSON.parse(localStorage.getItem('count'));
    let count = 0;
    // const v = [{blogs: 0}, {messages: 0}, {draft: 0}];
    // localStorage.setItem('count', JSON.stringify(v));
    fetch("https://mybrand-faustin.cyclic.app/api/v1/message", {
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
                count += 1;
                let blog = `<div class="blogs">
             <div class="title"><span id="blog-title">Message</span> <br>
        <p id="blog-p"><div>Name :    ${allblogs[i].username}</div><br>
            <div>Email :   ${allblogs[i].email}</div><br>
            <div>Message:   ${allblogs[i].message}</div></p>
              <br>

            <button type="button" onclick="deleteBlog('${allblogs[i]._id}')">Delete</button>
           </div>
         </div>`
                blogsContainer.innerHTML += blog;
            }
            // for(let i = 0; i < countAll.length; i++){
            //     if(Object.keys(countAll[i])[0] === 'blogs'){
            //         countAll[i].blogs = count;
            //         localStorage.setItem('count', countAll)
            //     }
            // }
            // for(key in countAll){
            //     if(key === 'blogs'){
            //         countAll.key = count;
            //     }
            // }
            // localStorage.setItem('count', countAll)
        })
        .catch((error) => alert(error));

    // alert("Blog published Successfully");

    // for(let i = allblogs.length - 1; i >= 0; i--){
    //     console.log(allblogs[i].index);
    //     let blog = `<div class="blogs" id="blogs">
    //     <div class="title"><span id="blog-title">${allblogs[i].title}</span>
    //       <p id="blog-p">${allblogs[i].content}</p>
    //     <button type="button" onclick="redirectToEddBog('${i}')">Edit</button>
    //       <button class="delete" id=${i} type="button" onclick="deleteBlog('${i}')">Delete</button>
    //     </div>
    //   </div>`
    //     blogsContainer.innerHTML += blog;
    // }
}


async function deleteBlog(index){
    console.log(index);
    const token = JSON.parse(localStorage.getItem('token'));
    await fetch(`https://mybrand-faustin.cyclic.app/api/v1/message/${index}`, {
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

    // let allBlogs = JSON.parse(localStorage.getItem('published_posts'));
    //     // allBlogs.splice(index, 1);
    //     // localStorage.setItem('published_posts', JSON.stringify(allBlogs));
    alert("Message has been deleted successfully")
    window.location.reload();
}