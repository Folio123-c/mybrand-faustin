// Select the form and buttons
const form = document.querySelector('form');
const saveDraftBtn = document.getElementById('draft');
const publishBtn = document.getElementById('publish');

// Add event listeners to the form and buttons
form.addEventListener('submit', handleSubmit);
saveDraftBtn.addEventListener('click', handleSaveDraft);
publishBtn.addEventListener('click', handlePublish);

// Define the local storage keys
const PUBLISHED_POSTS_KEY = 'published_posts';
const DRAFT_POSTS_KEY = 'draft_posts';

// Define the handlers for the form and buttons
function handleSubmit(event) {
    event.preventDefault();
    const title = event.target.elements['name'].value;
    const content = event.target.elements['message'].value;
    // Store the post as a draft
    saveDraft({ title, content });
    // Clear the form
    event.target.reset();
}

function handleSaveDraft(event) {
    const title = form.elements['name'].value;
    const content = form.elements['message'].value;
    const blogId = document.getElementById('hiden-edit').textContent;
    // Store the post as a draft
    saveDraft({ title, content, blogId });
    // Clear the form
    form.reset();
}

function handlePublish(event) {
    const title = form.elements['name'].value;
    const content = form.elements['message'].value;
    const image = form.elements['image'].value;
    // Store the post as published
    publishPost({ title, image, content});
    // Clear the form
    form.reset();
}

// Define the functions for storing the posts
function saveDraft(post) {
    let action = document.getElementById('draft').textContent;
    if(action !== 'Update') {
        const draftPosts = getDraftPosts();
        draftPosts.push(post);
        localStorage.setItem(DRAFT_POSTS_KEY, JSON.stringify(draftPosts));
        alert("Blog saved as draft");
    } else {
        let urlParams = new URLSearchParams(window.location.search);
        let blogId = urlParams.get('id');
        let allBlogs = JSON.parse(localStorage.getItem('draft_posts'));
        for(let i = allBlogs.length - 1; i >= 0 ; i--){
            if(i === Number(blogId)) {
                allBlogs[i].title = post.title;
                allBlogs[i].content = post.content
            }
        }
        localStorage.setItem('draft_posts', JSON.stringify(allBlogs));
        alert("Blog has been updated");
    }
}

function getDraftPosts() {
    return JSON.parse(localStorage.getItem(DRAFT_POSTS_KEY)) || [];
}

function publishPost(post) {
    // const publishedPosts = getPublishedPosts();
    // publishedPosts.push(post);
    // localStorage.setItem(PUBLISHED_POSTS_KEY, JSON.stringify(publishedPosts));

    fetch("https://mybrand-faustin.cyclic.app/api/v1/blogs", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
    })
        .then((resp) => {
            return resp.json();
        })
        .then((data) => {
            console.log(data);
            // alert(data.message);
        })
        .catch((error) => alert(error));

    alert("Blog published Successfully");
}

function getPublishedPosts() {
    return JSON.parse(localStorage.getItem(PUBLISHED_POSTS_KEY)) || [];
}


let title= document.querySelectorAll('#blog-title');
let content= document.querySelectorAll('#blog-p')

let allblogs=JSON.parse(localStorage.getItem('draft_posts'))
console.log("allblogs");
console.log(allblogs);
for(let i=0; i< title.length; i++){
    title[i].innerHTML=allblogs[i].title;
    content[i].innerHTML=allblogs[i].content;

}
