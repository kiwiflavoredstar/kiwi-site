const primary = document.getElementById('primary');
const secondary = document.getElementById('secondary');
const tertiary = document.getElementById('tertiary');
const button = document.getElementById('button');

function changeFlag() {
    if (button.innerHTML.match("transify!!")) {
        primary.style.backgroundColor = "#5bcefa";
        secondary.style.backgroundColor = "#f5a9b8";
        tertiary.style.backgroundColor = "white";
        button.innerHTML = "kiwiify!!";
    }
    else {
        primary.style.backgroundColor = "#8D8D8D";
        secondary.style.backgroundColor = "#666666";
        tertiary.style.backgroundColor = "#8AFFC3";
        button.innerHTML = "transify!!";
    }
}