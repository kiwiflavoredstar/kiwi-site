const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
let retry = document.getElementById('retryContainer');

let oneDead = false;
let twoDead = false;
let threeDead = false;
let fourDead = false;

function killOne() {
    one.style.display = 'none';
    oneDead = true;
    checkAllDead();
}
function killTwo() {
    two.style.display = 'none';
    twoDead = true;
    checkAllDead();
}
function killThree() {
    three.style.display = 'none';
    threeDead = true;
    checkAllDead();
}
function killFour() {
    four.style.display = 'none';
    fourDead = true;
    checkAllDead();
}

function checkAllDead() {
    if (oneDead && twoDead && threeDead && fourDead) {
        retry.style.display = "unset"
    }
}

function retryThing() {
    location.reload();
}