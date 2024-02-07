let square = document.getElementById("circle");

function changeColor() {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    square.style.backgroundColor = "#" + randomColor;
}