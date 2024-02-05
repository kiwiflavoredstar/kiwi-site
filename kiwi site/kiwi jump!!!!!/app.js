const dinosaur = document.querySelector('.dinosaur');
const obstacle = document.querySelector('.obstacle');
const gameOverText = document.querySelector('.game-over');
const startButton = document.getElementById('startButton');
// ^^^^ These consts define the objects used in the game
let isJumping = false;
let isGameOver = false;
let score = 0;
//^^^^ these variables make it so that you don't die instantly 
document.getElementById('scoreCounter').innerHTML = "score: " + score;

dinosaur.style.display = 'none';
obstacle.style.display = 'none';
//^^^^ These lines make it so that the game doesn't start unless the start button is pressed

function startGame() {
    dinosaur.style.display = 'block';
    obstacle.style.display = 'block';
    startButton.style.display = 'none';
}
//^^^^ This function makes it so that the game starts
document.addEventListener("keydown", function (event) {
    if (event.key === "w" && !isJumping && !isGameOver) {
        isJumping = true;
        dinosaur.style.animation = "jump 0.8s";

        setTimeout(() => {
            dinosaur.style.animation = "none";
            isJumping = false;
        }, 800);
        score += 1;
        increaseScore();
    }
});
// ^^^^ This function makes it so that the "dinosaur" jumps when the "w" key is pressed and also increases the score by 1
function checkCollision() {
    const dinosaurRect = dinosaur.getBoundingClientRect();
    const obstacleRect = obstacle.getBoundingClientRect();
    if (
        dinosaurRect.right > obstacleRect.left &&
        dinosaurRect.left < obstacleRect.right &&
        dinosaurRect.bottom > obstacleRect.top
    ) {
        gameIsOver();
    }
}
setInterval(checkCollision, 0);
// ^^^^ This function checks if the "dinosaur" collides with the obstacle
function gameIsOver() {
    isGameOver = true;
    dinosaur.style.animation = 'none';
    obstacle.style.animation = 'none';
    gameOverText.style.display = 'block';
}
// ^^^^ This function make it so the game ends and displays the again!!!!! when the "dinosaur" collides with the obstacle
function restartGame() {
    location.reload();
}
//^^^^ this function makes it so that the page refreshed when the again!!!!! button is pressed
function increaseScore() {
    document.getElementById('scoreCounter').innerHTML = "score: " + score;
}
let array = ["item 1", "item 2", "item 3", "item 4"]
//^^^^ there's an array

for (let i = 0; i < 10; i++) {
    console.log("wow");
}
//^^^^ there's also a loop