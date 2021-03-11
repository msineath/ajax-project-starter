// const fetch = require ('node-fetch')
const getCatPic = async () => {
    const res = await fetch(`/kitten/image`);
    const json = await res.json();
    let catPic = document.getElementsByClassName('cat-pic');

    if(res.ok) {
        catPic[0].src = json.src;
    } else {
        throw new Error('No cat pic')
    }

}


window.addEventListener('DOMContentLoaded', getCatPic)
