// const fetch = require ('node-fetch')
const getCatPic = async () => {
    const res = await fetch(`/kitten/image`);
    const json = await res.json();
    let catPic = document.getElementsByClassName('cat-pic');
    console.log(catPic)

    if(res.ok) {
        console.log(json)
        catPic[0].src = json.src;
        console.log(catPic)
    }

}


window.addEventListener('DOMContentLoaded', getCatPic)
