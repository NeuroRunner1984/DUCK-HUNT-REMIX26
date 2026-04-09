<<<<<<< Updated upstream
let ducks;
let duckCount = 1;
let duckImageNames = ["duck-left.gif", "duck-right.gif"];
let duckWidth = 96;
let duckHeight = 93;
let duckVelocityX = 5;
let duckVelocityY = 5;

let gameWidth = window.screen.width;
let gameHeight = window.screen.height*3/4;

let score = 0;

window.onload = function() {
    // addDucks();
    setTimeout(addDucks, 2000); //wait 2 seconds
    setInterval(moveDucks, 1000/60); //60 frames per second
}

=======
const startOverlay = document.getElementById('start-overlay');
const gameCanvas = document.getElementById('gameCanvas');
let ducks = [];
let duckCount = 2;
let duckImageNames = ["duck-left.gif", "duck-right.gif"];
let duckWidth = 96;
let duckHeight = 93;
let duckVelocityX = 4;
let duckVelocityY = 4;
let wingSound = new Audio('duck-flap.mp3');
let backGroundMusic = new Audio('DUCK_HUNT_REMIX_THEME.mp3');
var timeLeft = 30; // Initial time in seconds
var countdownTimer;
var gameInterval; // Assuming you have a main game loop interval
const startGame = window.onload; 
let gameWidth = window.screen.width;
let gameHeight = window.screen.height*3/4;
let score = 0;



window.onload = function() {
const canvas = document.getElementById("gameCanvas").getContext("2d");
// const ctx = canvas.getContext('2d');
startOverlay.style.display = 'flex';
gameCanvas.style.display = 'flex';
startGameButton.addEventListener('click', startGame);
startGameButton.addEventListener('click', function() {
    console.log('Game Started!');
    startOverlay.style.display = 'none';
    gameCanvas.style.display = 'none';
    gameInterval = setInterval(startGame, 1000); 
        timeLeft = 30; // Reset time

    // Start the countdown timer that calls updateTimer every second (1000ms)
    countdownTimer = setInterval(updateTimer, 1000);
    // addDucks();
    setTimeout(addDucks, 2000); //wait 2 seconds
    setInterval(moveDucks, 1000/60); //60 frames per second
    //starts the play of background music 
    backGroundMusic.loop = true; 
    backGroundMusic.volume = 0.25; 
       // Listen for a user interaction aka 'click' to play the music
    document.addEventListener('click', function playAudioOnce() {
        backGroundMusic.play().catch(error => {
            // Handle cases where play() might still fail, e.g., if user has autoplay blocked globally
            console.error("Failed to play background music:", error);
        });
        // Remove the event listener after the first interaction to avoid playing multiple times
        document.removeEventListener('click', playAudioOnce);
    }, { once: true }); // Using { once: true } is a more modern way to ensure the listener runs only once
 }); 


   
}



// Function to format time and update the display
function updateTimer() {
    var minutes = parseInt(timeLeft / 60, 10);
    var seconds = parseInt(timeLeft % 60, 10);

    // Add leading zeros if seconds or minutes are less than 10
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById('timer').textContent = minutes + ":" + seconds;

    if (--timeLeft < 0) {
       gameOver();
    }
}

// Function to handle the "Game Over" state
function gameOver() {
    clearInterval(countdownTimer); // Stop the countdown
    clearInterval(gameInterval); // Stop your main game loop if you have one

    // Display the game over screen and hide the game area
    document.getElementById('gameArea').style.display = 'none';
    document.getElementById('gameOverScreen').style.display = 'block';

    // Add any other game over logic here (e.g., show score, etc.)
    console.log("Game Over!");
    
}
// Function to handle the "Play Again?" button restarting the game.
function restartGame() {
    const restartButton = document.getElementById('restartButton'); 
            console.log("Game restarted!");
            // Add your game restart logic here
            timeLeft = 30; // Reset time
            countdownTimer = setInterval(updateTimer, 1000);
            document.getElementById('gameOverScreen').style.display = 'none';
            document.getElementById('gameArea').style.display = 'block';
            document.getElementById("score").innerHTML = 0;
            score = 0;
            // ... other game initialization logic ...
            
        }

        if (restartButton) {
            restartButton.addEventListener('click', restartGame);
        }
    


>>>>>>> Stashed changes
function addDucks() {
    ducks = [];
    duckCount = Math.floor(Math.random()*2) + 1;
    for (let i = 0; i < duckCount; i++) {
        let duckImageName = duckImageNames[Math.floor(Math.random()*2)];
        let duckImage = document.createElement("img");
        duckImage.src = duckImageName;
        duckImage.width = duckWidth;
        duckImage.height = duckHeight;
        duckImage.draggable = false;
        duckImage.style.position = "absolute"; //allows tag to be placed in exact location
        //document.body.appendChild(duckImage);

        duckImage.onclick = function() {
            let duckShotSound = new Audio("duck-shot.mp3");
            duckShotSound.play();
            score += 1;
            document.getElementById("score").innerHTML = score;
            document.body.removeChild(this);
            
            //remove this duck from array
            let remaining_ducks = [];
            for (let i = 0; i < ducks.length; i++) {
                if (ducks[i].image !== this) {
                    remaining_ducks.push(ducks[i]);
                }
            }

            ducks = remaining_ducks;
            if (ducks.length == 0) {
                addDog(duckCount);
<<<<<<< Updated upstream
=======
               
               
>>>>>>> Stashed changes
            }
        }
        document.body.appendChild(duckImage);

        let duck = {
            image: duckImage,
            // x: 100,
            // y: 50,
            x: randomPosition(gameWidth - duckWidth),
            y: randomPosition(gameHeight - duckHeight),
            velocityX: duckVelocityX, //default positive x move right
            velocityY: duckVelocityY
        };
        duck.image.style.left = String(duck.x) + "px"; //x position
        duck.image.style.top = String(duck.y) + "px"; //y position

        if (duck.image.src.includes(duckImageNames[0])) {
            duck.velocityX = -duckVelocityX; //going left
        }
        ducks.push(duck);
    }
}

function moveDucks() {
<<<<<<< Updated upstream
=======
    
>>>>>>> Stashed changes
    for (let i = 0 ; i < ducks.length; i++) {
        let duck = ducks[i];
        duck.x += duck.velocityX;
        if (duck.x < 0 || duck.x + duckWidth > gameWidth) {
            duck.x -= duck.velocityX;
            duck.velocityX *= -1;
            if (duck.velocityX < 0) {
                duck.image.src = duckImageNames[0]; //left
            } else {
                duck.image.src = duckImageNames[1]; //right
            }
        }
        duck.y += duck.velocityY;
        if (duck.y < 0 || duck.y + duckHeight > gameHeight) {
            duck.y -= duck.velocityY;
            duck.velocityY *= -1;
        }
        duck.image.style.left = String(duck.x) + "px";
        duck.image.style.top = String(duck.y) + "px";
    }
<<<<<<< Updated upstream
=======

    let wingSoundPlayed = false;

function playWingSound() {
  if (!wingSoundPlayed) {
    wingSound.play()
      .then(() => {
        // Autoplay started!
        wingSoundPlayed = true; // Set flag to true after successful play
        console.log("Wing sound started playing after user interaction.");
      })
      .catch(error => {
        // Autoplay failed, but user interaction was detected.
        // This catch block handles cases where the user might have
        // muted the tab or disabled sound for the site.
        console.warn("Failed to play wing sound even after user interaction:", error);
      });
  }
}

// Attach an event listener to the document for a user interaction
// This example uses a 'click' event, but 'touchstart' or 'keydown' also work.
document.addEventListener('click', playWingSound, { onclick: true });
// document.addEventListener('keydown', playWingSound, { once: true });
// document.addEventListener('touchstart', playWingSound, { once: true });

// You might also consider moving your setInterval call to *after* user interaction
// if it's dependent on the sound playing correctly.
// For the specific line `wingSound.play();`, remove it from its current
// position (e.g., inside `moveDucks` or `window.onload` if it's called immediately).

>>>>>>> Stashed changes
}

function addDog(duckCount) {
    let dogImage = document.createElement("img");
    if (duckCount == 1) {
        dogImage.src = "dog-duck1.png";
        dogImage.width = 172;
    }
    else { //2
        dogImage.src = "dog-duck2.png";
        dogImage.width = 224;
    }
    dogImage.height = 152;
    dogImage.draggable = false;

    dogImage.style.position = "fixed"; //stay in same place even when scrolling
    dogImage.style.bottom = "0px";     //bottom side of image 0px from bottom of page
    dogImage.style.left = "50%";       //left side of image 50% screen width from left side of page
    document.body.appendChild(dogImage);

    let dogScoreSound = new Audio("dog-score.mp3");
    dogScoreSound.play();
<<<<<<< Updated upstream

    setTimeout(function() {
        document.body.removeChild(dogImage);
        addDucks();
=======
      
    setTimeout(function() {
        document.body.removeChild(dogImage);
        addDucks();
      
>>>>>>> Stashed changes
    }, 5000); //5000ms = 5 seconds
}

function randomPosition(limit) {
    return Math.floor((Math.random() * limit));
<<<<<<< Updated upstream
}
=======
}

>>>>>>> Stashed changes
