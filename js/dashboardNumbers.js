let pubBlogs = JSON.parse(localStorage.getItem('published_posts'));
document.getElementById('pub').textContent = pubBlogs.length;
let draftBlog=JSON.parse(localStorage.getItem('draft_posts'));
document.getElementById('draf').textContent=draftBlog.length;
let draftBlogs=JSON.parse(localStorage.getItem('draft_posts'));
document.getElementById('drafs').textContent=draftBlogs.length;
let BlogMessage=JSON.parse(localStorage.getItem('messageboxes'))
console.log(BlogMessage.length)
document.getElementById('messa').textContent=BlogMessage.length;