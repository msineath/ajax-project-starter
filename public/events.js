// const fetch = require ('node-fetch')
const getCatPic = async () => {
    let loader = document.querySelector(".loader");
    loader.innerHTML = "Loading...";
    const res = await fetch(`/kitten/image`);
    const json = await res.json();
    let catPic = document.getElementsByClassName('cat-pic');
<<<<<<< HEAD
    // console.log(catPic)

    if(res.ok) {
        // console.log(json)
        catPic[0].src = json.src;
        // console.log(catPic)
        loader.innerHTML = '';
    } else {
        alert("Something went wrong, please try again...")
=======

    if(res.ok) {
        catPic[0].src = json.src;
    } else {
        throw new Error('No cat pic')
>>>>>>> 182b30653fe6daf77cd1a14e14f3242faca1e699
    }

}


window.addEventListener('DOMContentLoaded', getCatPic)
let newPic = document.getElementById('new-pic');
newPic.addEventListener('click', getCatPic);

let upvote = document.getElementById('upvote');
let downvote = document.getElementById('downvote');
let score = document.querySelector('.score');

const upVote = async () => {
    const res = await fetch(`/kitten/upvote`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'            
        },
        body: JSON.stringify({score})
    });
       const json = await res.json();
       console.log(res);
       console.log(json) 

   if(res.ok) {
       console.log(score)
    score.innerHTML = json.score;
   } else {
       alert('Something went wrong, please try again...');
   }
}

upvote.addEventListener('click', upVote)