let count = 0;
let counter = document.getElementById('kiwiCounter');

counter.innerHTML = "kiwi: " + count + "!!"


function kiwiIncrease() {
    count++;
    counter.innerHTML = "kiwi: " + count + "!!"
}

function kiwiBillion() {
    count = 1000000000;
    counter.innerHTML = "kiwi: " + count + "!!"
}

function kiwiReset() {
    count = 0;
    counter.innerHTML = "kiwi: " + count + "!!"
}

function showAbout() {
    alert('its a clicker game made by kiwi with some sweet extra features!!');
}
function showHowTo() {
    alert('you click the buttons!!');
}