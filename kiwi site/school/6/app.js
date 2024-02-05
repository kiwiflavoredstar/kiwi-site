let position = 0;
let block = document.getElementById('blocc');
function moveBlock() {
    position += 1
    block.style.left = position + 'px';
    if (position > innerWidth) {
        position = 0;
    }
}

setInterval(moveBlock, 1)