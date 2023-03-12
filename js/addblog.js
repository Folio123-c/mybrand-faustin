// Select the form and buttons
const form = document.querySelector('form');
const saveDraftBtn = document.getElementById('draft');
const publishBtn = document.getElementById('publish');

// Add event listeners to the form and buttons
form.addEventListener('submit', handleSubmit);
saveDraftBtn.addEventListener('click', handleSaveDraft);
publishBtn.addEventListener('click', handlePublish);


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
    const image = form.elements['image'].value
    const content = form.elements['message'].value;
    // const blogId = document.getElementById('hiden-edit').textContent;
    // Store the post as a draft
    let urlParams = new URLSearchParams(window.location.search);
    // let action = urlParams.get('action');
    let urlParamsId = new URLSearchParams(window.location.search);
    let blogId = urlParamsId.get('id');
    saveDraft({ title, image, content, blogId });
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
async function saveDraft(post) {
    let action = document.getElementById('draft').textContent;
    let urlParams = new URLSearchParams(window.location.search);
    let blogId = urlParams.get('id');
    const token = JSON.parse(localStorage.getItem('token'));
    if(action === 'Update') {
        await fetch(`https://mybrand-faustin.cyclic.app/api/v1/blogs/${blogId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            },
            body: JSON.stringify(post)
        })

            .then((resp) => {
                return resp.json();
            })
            .then((data) => {
                console.log(data);
                // alert(data.message);
            })
            .catch((error) => alert(error));
        alert("Blog has been updated successfully");
    }
    else {
        await fetch(`https://mybrand-faustin.cyclic.app/api/v1/draft`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            },
            body: JSON.stringify(post)
        })
            .then((resp) => {
                return resp.json();
            })
            .then((data) => {
                console.log(data);
                // alert(data.message);
            })
            .catch((error) => alert(error));
        alert("Blog has been saved as draft");

    }
}


function publishPost(post) {

    const token = JSON.parse(localStorage.getItem('token'));
    fetch("https://mybrand-faustin.cyclic.app/api/v1/blogs", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": token
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


