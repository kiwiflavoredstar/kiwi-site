const slotOne = document.getElementById('slotOne');
const slotTwo = document.getElementById('slotTwo');
const slotThree = document.getElementById('slotThree');
const slotFour = document.getElementById('slotFour');

let one = 0;
let two = 0;
let three = 0;
let four = 0;

function increaseOne() {
    if (slotOne.innerHTML < 9) {
        one++
        slotOne.innerHTML = one;
    }
    else {
        one = 0;
        slotOne.innerHTML = one;
    }
}
function increaseTwo() {
    if (slotTwo.innerHTML < 9) {
        two++
        slotTwo.innerHTML = two;
    }
    else {
        two = 0;
        slotTwo.innerHTML = two;
    }
}
function increaseThree() {
    if (slotThree.innerHTML < 9) {
        three++
        slotThree.innerHTML = three;
    }
    else {
        three = 0;
        slotThree.innerHTML = three;
    }
}
function increaseFour() {
    if (slotFour.innerHTML < 9) {
        four++
        slotFour.innerHTML = four;
    }
    else {
        four = 0;
        slotFour.innerHTML = four;
    }
}

function check(){
    if(one == 2 && two == 9 && three == 5 && four == 9){
        alert("correct!!")
    }
    else if(one == 0 && two == 0 && three == 5 && four == 7){
        alert("correct!!")
    }
    else{
        alert("nuh uh!!")
    }
}