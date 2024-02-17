const square = document.getElementById('square');


function generateSquareTop(max) {
    return Math.floor(Math.random() * max);
}

function generateSquareLeft(max) {
    return Math.floor(Math.random() * max);
}

function moveSquare(){
    square.style.top = generateSquareTop(68) + "%";
    square.style.left = generateSquareLeft(90) + "%";
}