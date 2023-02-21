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
    // Store the post as a draft
    saveDraft({ title, content });
    // Clear the form
    form.reset();
}

function handlePublish(event) {
    const title = form.elements['name'].value;
    const content = form.elements['message'].value;
    // Store the post as published
    publishPost({ title, content });
    // Clear the form
    form.reset();
}

// Define the functions for storing the posts
function saveDraft(post) {
    const draftPosts = getDraftPosts();
    draftPosts.push(post);
    localStorage.setItem(DRAFT_POSTS_KEY, JSON.stringify(draftPosts));
}

function getDraftPosts() {
    return JSON.parse(localStorage.getItem(DRAFT_POSTS_KEY)) || [];
}

function publishPost(post) {
    const publishedPosts = getPublishedPosts();
    publishedPosts.push(post);
    localStorage.setItem(PUBLISHED_POSTS_KEY, JSON.stringify(publishedPosts));
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
