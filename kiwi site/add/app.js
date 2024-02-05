const container = document.getElementById("ballContainer");
let array = ["blue", "blue", "red", "red", "blue"];
container.innerHTML = array

function addRed(){
    array.push("red");
    array.shift();
    container.innerHTML = array
}
function addBlue(){
    array.push("blue");
    array.shift();
    container.innerHTML = array
}
document.addEventListener("keydown", function (event) {
    if (event.key === "w") {
        addRed();
    }
});
document.addEventListener("keydown", function (event) {
    if (event.key === "o") {
        addBlue();
    }
});