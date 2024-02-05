let position = 0;
let block = document.getElementById('blocc');
let back = document.getElementById('backbutton');
function moveBlock() {
    position += 1
    block.style.left = position + 'px';
    if (position > innerWidth) {
        position = 0;
    }
}


setInterval(moveBlock, 1)

function begone(){
    block.style.display = "none";
    back.style.display = "unset";
    document.getElementById("gaweg").style.display = "none";
}
function getbackhere(){
    block.style.display = "unset";
    back.style.display = "none";
    document.getElementById("gaweg").style.display = "unset";
}
function leftg(){
    position = 0;
}