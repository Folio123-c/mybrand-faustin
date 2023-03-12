 function adminRetrieveBlogs(){
     let blogsContainer = document.querySelector('.flex-container');
     // let allblogs=JSON.parse(localStorage.getItem('published_posts'));
     let blogId;
     const token = JSON.parse(localStorage.getItem('token'));

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
             for(let i = allblogs.length - 1; i >= 0; i--){
                 let blog = `<div class="item1"><h2>${allblogs[i].title}<br><br></h2>
           <span id="image"><img src="${allblogs[i].image}" style= "width:150px; height:150px; border-radius: 23px;"></span>
         <div>
             <a href="./fullView.html?id=${allblogs[i]._id}"> <button class="btn" id="readmore" type="submit" id="${i}" style= "margin-top: 30px; padding:8px;">Read more</button></a>
        </div>
    </div>`
                 blogsContainer.innerHTML += blog;
             }
         })
         .catch((error) => alert(error));

//
//     let blogsContainer = document.querySelector('.flex-container');
//     let allblogs=JSON.parse(localStorage.getItem('published_posts'));
//     let blogId;
//     for(let i = allblogs.length - 1; i >= 0; i--){
//
//         // console.log(allblogs[i].index);
//         let blog = `<div class="item1"><h2>${allblogs[i].title}<br><br></h2>
//     <p>${allblogs[i].content} </p><br>
//         <div>
//             <a href="./fullView.html"> <button class="btn" type="submit" id="${i}">Read more</button></a>
//         </div>
// </div>`
//         blogsContainer.innerHTML += blog;
//     }
 }
// let button=document.querySelectorAll('.btn')
// console.log(button.length);
//     for(let i=0; i<button.length; i++){
//         button[i].addEventListener('click',()=>{
//             console.log(button[i])
//             let index=button[i].getAttribute('id')
//             localStorage.setItem('index',index);
//         })
//     }

