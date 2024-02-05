let image = document.getElementById('micky');
let alert = document.getElementById('alert');

function changeSleepy() {
    if (image.src.match("img/Screenshot_20240103_214911_Gallery.jpg")) {
        image.src = "img/Screenshot_20240103_214907_Gallery.jpg"
    }
    else {
        alert.innerHTML = "she's already asleep!!"
    }
    if (alert.innerHTML.match("she's already awake!!")) {
        alert.innerHTML = ""
    }
}
function changeAwake() {
    if (image.src.match("img/Screenshot_20240103_214907_Gallery.jpg")) {
        image.src = "img/Screenshot_20240103_214911_Gallery.jpg"
    }
    else {
        alert.innerHTML = "she's already awake!!"
    }
    if (alert.innerHTML.match("she's already asleep!!")) {
        alert.innerHTML = ""
    }
}