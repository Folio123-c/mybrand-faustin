function adminRetrieveBlogs(){
    let blogsContainer = document.querySelector('.blogs-all');
    let blogId;
    const token = JSON.parse(localStorage.getItem('token'));
    let count = 0;

    fetch("https://mybrand-faustin.cyclic.app/api/v1/blogs", {
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
            // document.getElementById('pub').textContent = allblogs.length;
            for(let i = allblogs.length - 1; i >= 0; i--){
                count += 1;
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
    await fetch(`https://mybrand-faustin.cyclic.app/api/v1/blogs/${index}`, {
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

let blogAction = '';

function redirectToEddBog(blogId){
    window.location.href = `./addblog.html?action=edit&id=${blogId}`
}


