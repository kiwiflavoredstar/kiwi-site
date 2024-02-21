//all of these variables define the number slots and the sounds used!!
const slotOne = document.getElementById('slotOne');
const slotTwo = document.getElementById('slotTwo');
const slotThree = document.getElementById('slotThree');
const slotFour = document.getElementById('slotFour');
const audioWrong = new Audio('audio/extremely-loud-incorrect-buzzer-made-with-Voicemod.mp3');
const audioCorrect = new Audio('audio/extremely-loud-correct-buzzer.mp3');

//these variables make it so that the numbers in the slots start at zero!!
let one = 0;
let two = 0;
let three = 0;
let four = 0;

//there variables generates the numbers for the random combination!!
let randomNumberOne = Math.floor(Math.random() * 10);
let randomNumberTwo = Math.floor(Math.random() * 10);
let randomNumberThree = Math.floor(Math.random() * 10);
let randomNumberFour = Math.floor(Math.random() * 10);

//this beautiful line here shows the correct random combination in the console!!
console.log(randomNumberOne, randomNumberTwo, randomNumberThree, randomNumberFour);

//these four functions make it so that the numbers in the slots increase when clicked and reset when they go past nine!!
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

//this function checks if the combination is correct or incorrect!!
function check() {
    if (one == randomNumberOne && two == randomNumberTwo && three == randomNumberThree && four == randomNumberFour) {
        audioCorrect.play();
        alert("correct!!")
    }
    if (one == 2 && two == 9 && three == 5 && four == 9) {
        audioCorrect.play();
        alert("correct!!")
    }
    if (one == 0 && two == 0 && three == 5 && four == 7) {
        audioCorrect.play();
        alert("correct!!")
    }
    else {
        audioWrong.play();
        alert("nuh uh!!")
        
    }
}