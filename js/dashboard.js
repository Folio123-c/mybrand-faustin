
// let title= document.querySelectorAll('#blog-title');
// let content= document.querySelectorAll('#blog-p')
// let blog=document.querySelectorAll('#blogs')

// let allblogs=JSON.parse(localStorage.getItem('published_posts'))
// blog=data.data

// for(let i=title.length - 1; i>=0; i--) {
//     title[i].innerHTML=allblogs[i].title;
//     content[i].innerHTML=allblogs[i].content;
// }

// const token = JSON.parse(localStorage.getItem('token'));

fetch("https://mybrand-faustin.cyclic.app/api/v1/blogs")
    .then((resp) => {
        return resp.json();
    })
    .then((data) => {
        let title = document.querySelectorAll('#blog-title');
        let content = document.querySelectorAll('#blog-p');
        const allblogs = data.data;

        for(let i = allblogs.length - 1; i >= 0; i--) {
            const j = allblogs.length - i - 1;
            if(j >= title.length) {
                break; // Break out of the loop if we've updated all elements
            }
            title[j].innerHTML = allblogs[i].title;
            content[j].innerHTML = allblogs[i].content;
        }
    });

