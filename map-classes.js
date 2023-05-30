import Bannana from "./bannana.js";
import Star from "./star.js";
import Rock from "./rock.js";
import TreeStem from "./tree-stem.js";
import Heart from "./heart.js";
import Rocket from "./rocket.js";
import Monkey from "./monkey.js";
import Button from "./buttons.js";

function setup() {
  frameRate(500);
  const canvas = createCanvas(800, 650);
  canvas.parent("dad");
}
window.setup = setup;


let backgroundImage,
  starImage,
  heartImage,
  rockImage,
  bannanaImage,
  rocketImage;

function preload() {
  backgroundImage = loadImage("pics/background.png");
  starImage = loadImage("pics/star.png");
  heartImage = loadImage("pics/heart.png");
  rockImage = loadImage("pics/rock.png");
  bannanaImage = loadImage("pics/bannana.png");
  rocketImage = loadImage("pics/rocket.png");
  monkeyClimbImages = [
    loadImage("pics/monkey2.png"),
    loadImage("pics/monkey1.png"),
  ];
  starClimbImages = [
    loadImage("pics/star-monkey2.png"),
    loadImage("pics/star-monkey1.png"),
  ];
  rocketClimbImages = [
    loadImage("pics/rocket-monkey2.png"),
    loadImage("pics/rocket-monkey1.png"),
  ]; //array pics for monkey's animation
}
let monkeyClimbImages = [];
let starClimbImages = [];
let rocketClimbImages = [];

window.preload = preload;

class GameOverScore {
  constructor(s) {
    this.s = s;
  }
  draw() {
    push();
    textSize(40);
    fill(0, 0, 0);
    textAlign(CENTER);
    text("YOUR SCORE IS " + " " + this.s, 400, 150);
    pop();
  }
}
class LeftBranch {
  constructor(x, y, width, leafSize) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.leafSize = leafSize;
  }
  draw() {
    push();
    strokeWeight(0);
    fill(96, 56, 19);
    translate(this.x, this.y);

    rect(this.width, 0, 300, 100);
    fill(0, 155, 0);
    ellipse(this.width + 20, 0, this.leafSize);
    ellipse(this.width, 50, this.leafSize);
    ellipse(this.width + 20, 100, this.leafSize);
    ellipse(this.width + 40, 50, this.leafSize);
    pop();
  }
}

class RightBranch {
  constructor(x, y, width, leafSize) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.leafSize = leafSize;
  }
  draw() {
    push();
    strokeWeight(0);
    translate(this.x, this.y);
    fill(96, 56, 19);
    rect(572, 0, this.width, 100);
    fill(0, 155, 0);
    ellipse(552 + this.width, 0, this.leafSize);
    ellipse(572 + this.width, 50, this.leafSize);
    ellipse(552 + this.width, 100, this.leafSize);
    ellipse(532 + this.width, 50, this.leafSize);
    pop();
  }
}

class Score {
  constructor(s) {
    this.s = s;
  }
  draw() {
    push();
    textSize(32);
    fill(0, 0, 0);
    text(this.s, 10, 30);
    pop();
  }
}

function drawRocks() {
  // the array make it posssible to access each rock seperatly and we use decrementing(goes from right to left instead) inorder to not change the order of the array.
  for (let i = rocks.length - 1; i >= 0; i--) {
    let rock = rocks[i];
    //checks if gameisrunningis true which it always is if gameover is false 
    if (gameIsRunning === true) {
      rock.y += rock.velocity + speed;
    }

    rock.draw();
    /* if non of the power ups are active and monkey collide with a rock lifes 
    starts to go down with 1. To stop lifes from going down more than one the rockCollision is
    instantly set to true making it so that only one life is removed 
    */
    if (
      monkey.x > rock.x - rock.size / 3 &&
      monkey.x < rock.x + rock.size / 1.8 &&
      monkey.y > rock.y - rock.size / 1.8 &&
      monkey.y < rock.y + rock.size / 1.8 &&
      rockCollision === true &&
      starTimer === false &&
      rocketTimer === false
    ) {
      lifes -= 1;
      rockCollision = false;
    }
    // here we make it so that when the rock is higher up than the monkey rockCollision is set to true again making collision possible
    if (monkey.y + rock.size * 3 < rock.y) {
      rockCollision = true;
    }
    // so that the rocks move faster down when rocketTimer is true
    if (rocketTimer === true) {
      rock.y += rock.velocity + 3;
    }
  }
  rockInterval -= 0.5;
  //controlls how often rock is created and depending on how big accelerator is. also pushes it to the rocks array
  if (rockInterval <= 0 && accelerator < 2000) {
    let rock = new Rock(
      random(70, 730),
      -200,
      random(1, 3),
      random(80, 150),
      rockImage
    );
    rocks.push(rock);
    rockInterval = random(200, 300);

  } else if (rockInterval <= 0 && accelerator > 35000) {
    let rock = new Rock(
      random(70, 730),
      -300,
      random(1, 3),
      random(80, 150),
      rockImage
    );
    rocks.push(rock);
    rockInterval = random(10, 20) / speed;
  } else if (rockInterval <= 0 && accelerator > 25000) {
    let rock = new Rock(
      random(70, 730),
      -300,
      random(1, 3),
      random(80, 150),
      rockImage
    );
    rocks.push(rock);
    rockInterval = random(20, 30) / speed;
  } else if (rockInterval <= 0 && accelerator > 18000) {
    let rock = new Rock(
      random(70, 730),
      -300,
      random(1, 3),
      random(80, 150),
      rockImage
    );
    rocks.push(rock);
    rockInterval = random(20, 40) / speed;
  } else if (rockInterval <= 0 && accelerator > 16000) {
    let rock = new Rock(
      random(70, 730),
      -300,
      random(1, 3),
      random(80, 150),
      rockImage
    );
    rocks.push(rock);
    rockInterval = random(20, 50) / speed;
  } else if (rockInterval <= 0 && accelerator > 14000) {
    let rock = new Rock(
      random(70, 730),
      -300,
      random(1, 3),
      random(80, 150),
      rockImage
    );
    rocks.push(rock);
    rockInterval = random(20, 60) / speed;
  } else if (rockInterval <= 0 && accelerator > 12000) {
    let rock = new Rock(
      random(70, 730),
      -300,
      random(1, 3),
      random(80, 150),
      rockImage
    );
    rocks.push(rock);
    rockInterval = random(20, 70) / speed;
  } else if (rockInterval <= 0 && accelerator > 10000) {
    let rock = new Rock(
      random(70, 730),
      -300,
      random(1, 3),
      random(80, 150),
      rockImage
    );
    rocks.push(rock);
    rockInterval = random(30, 80) / speed;
  } else if (rockInterval <= 0 && accelerator > 8000) {
    let rock = new Rock(
      random(70, 730),
      -300,
      random(1, 3),
      random(80, 150),
      rockImage
    );
    rocks.push(rock);
    rockInterval = random(40, 90) / speed;
  } else if (rockInterval <= 0 && accelerator > 6000) {
    let rock = new Rock(
      random(70, 730),
      -300,
      random(1, 3),
      random(80, 150),
      rockImage
    );
    rocks.push(rock);
    rockInterval = random(50, 100) / speed;
  } else if (rockInterval <= 0 && accelerator > 4000) {
    let rock = new Rock(
      random(70, 730),
      -300,
      random(1, 3),
      random(80, 150),
      rockImage
    );
    rocks.push(rock);
    rockInterval = random(100, 150) / speed;
  } else if (rockInterval <= 0 && accelerator > 2000) {
    let rock = new Rock(
      random(70, 730),
      -300,
      random(1, 3),
      random(80, 150),
      rockImage
    );
    rocks.push(rock);
    rockInterval = random(150, 250) / speed;
  }
}
// the following powerups works the same as rock but has the same speed as branches and when it collides with monkey the correspondent bannana is removed from the array
function drawBannanas() {
  for (let i = bannanas.length - 1; i >= 0; i--) {
    let bannana = bannanas[i];
    if (gameIsRunning === true) {
      bannana.y += 1;
    }
    bannana.draw();

    if (
      monkey.x > bannana.x - bannana.size / 2 &&
      monkey.x < bannana.x + bannana.size / 2 &&
      monkey.y > bannana.y - bannana.size / 2 &&
      monkey.y < bannana.y + bannana.size / 2 &&
      bannanaCollision === true
    ) {
      bannanaPoints += 500;
      bannanaCollision = false;
      bannanas.splice(i, 1);
    }
    if (monkey.y + 350 > bannana.y + bannana.size / 2) {
      bannanaCollision = true;
    }
    if (rocketTimer === true) {
      bannana.y += 3;
    }
  }
  bannanaInterval -= speed / 2;
  if (bannanaInterval <= 0) {
    let bannana = new Bannana(
      random(245, 555),
      random(-50, -555),
      1,
      50,
      bannanaImage
    );
    bannanas.push(bannana);
    bannanaInterval = random(300, 400);
  }
}
//same as bannana but adds 1 to lifes 
function drawHearts() {
  for (let i = hearts.length - 1; i >= 0; i--) {
    let heart = hearts[i];
    if (gameIsRunning === true) {
      heart.y += 1;
    }
    heart.draw();

    if (
      monkey.x > heart.x - heart.size / 2 &&
      monkey.x < heart.x + heart.size / 2 &&
      monkey.y > heart.y - heart.size / 2 &&
      monkey.y < heart.y + heart.size / 2 &&
      heartCollision === true &&
      lifes < 3
    ) {
      lifes += 1;
      hearts.splice(i, 1);
    }
    if (monkey.y + 350 > heart.y + heart.size / 2) {
      heartCollision = true;
    }
    if (rocketTimer === true) {
      heart.y += 3;
    }
  }
  heartInterval -= speed / 10;
  if (heartInterval <= 0) {
    let heart = new Heart(random(245, 555), random(-50, -555), 50, heartImage);
    hearts.push(heart);
    heartInterval = random(500, 1000);
  }
}

//displays hearts in the ui depending on how many lifes you have 
function drawUiHearts() {
  if (lifes === 1) {
    let uiHeart1 = new Heart(760, 10, 35, heartImage);
    uiHeart1.draw();
  } else if (lifes === 2) {
    let uiHeart1 = new Heart(760, 10, 35, heartImage);
    let uiHeart2 = new Heart(720, 10, 35, heartImage);
    uiHeart1.draw();
    uiHeart2.draw();
  } else if (lifes === 3) {
    let uiHeart1 = new Heart(760, 10, 35, heartImage);
    let uiHeart2 = new Heart(720, 10, 35, heartImage);
    let uiHeart3 = new Heart(680, 10, 35, heartImage);
    uiHeart1.draw();
    uiHeart2.draw();
    uiHeart3.draw();
  } else {
    gameOver = true;
  }
}
function drawStars() {
  for (let i = stars.length - 1; i >= 0; i--) {
    let star = stars[i];
    if (gameIsRunning === true) {
      star.y += 1;
    }
    star.draw();

    if (
      monkey.x > star.x - star.size / 2 &&
      monkey.x < star.x + star.size / 2 &&
      monkey.y > star.y - star.size / 2 &&
      monkey.y < star.y + star.size / 2 &&
      starCollision === true
    ) {
      starCollision = false;
      stars.splice(i, 1);
    }
    if (monkey.y + 350 > star.y + star.size / 2) {
      starCollision = true;
    }
    //if monkey collides with StarTimer it is set to true which need to be false inorder for rockcollison to happen it also sets starCounter to starCounter += 1 in the draw function. 
    if (
      monkey.x > star.x - star.size / 2 &&
      monkey.x < star.x + star.size / 2 &&
      monkey.y > star.y - star.size / 2 &&
      monkey.y < star.y + star.size / 2
    ) {
      starTimer = true;
    }
    //how long startimer is true
    if (starCounter >= 1000) {
      starTimer = false;
    }
    //resets star counter
    if (starTimer === false) {
      starCounter = 0;
    }
    if (rocketTimer === true) {
      star.y += 3;
    }
  }
  starInterval -= speed / 2;
  if (starInterval <= 0) {
    let star = new Star(random(245, 555), -50, 1, 50, starImage);
    stars.push(star);
    starInterval = random(1500, 2500);
  }
}
//works the same as drawStars
function drawRockets() {
  for (let i = rockets.length - 1; i >= 0; i--) {
    let rocket = rockets[i];
    if (gameIsRunning === true) {
      rocket.y += 1;
    }
    rocket.draw();

    if (
      monkey.x > rocket.x - rocket.size / 2 &&
      monkey.x < rocket.x + rocket.size / 2 &&
      monkey.y > rocket.y - rocket.size / 2 &&
      monkey.y < rocket.y + rocket.size / 2 &&
      rocketCollision === true
    ) {
      rocketCollision = false;
      rockets.splice(i, 1);
    }
    if (monkey.y + 350 > rocket.y + rocket.size / 2) {
      rocketCollision = true;
    }
    if (
      monkey.x > rocket.x - rocket.size / 2 &&
      monkey.x < rocket.x + rocket.size / 2 &&
      monkey.y > rocket.y - rocket.size / 2 &&
      monkey.y < rocket.y + rocket.size / 2
    ) {
      rocketTimer = true;
    }
    if (rocketCounter >= 1000) {
      rocketTimer = false;
    }
    if (rocketTimer === false) {
      rocketCounter = 0;
    } else {
      rocket.y += 3;
    }
  }
  rocketInterval -= speed / 2;
  if (rocketInterval <= 0) {
    let rocket = new Rocket(
      random(245, 555),
      random(-50, -555),
      1,
      50,
      rocketImage
    );
    rockets.push(rocket);
    rocketInterval = random(2000, 3000);
  }
}
function playAgainMenu() {
  playAgainButton.draw();
  gameOverScore.draw();
}
function startMenu() {
  playButton.draw();
}

//resets all values 
function gameRestarting() {
  gameIsRunning = true;
  gameOver = false;
  gameRestart = false;
  accelerator = 0;
  speed = 1;
  bannanaInterval = 0;
  rockInterval = 0;
  heartInterval = 0;
  starInterval = 0;
  rocketInterval = 0;
  bannanaPoints = 0;
  starTimer = false;
  starCounter = 0;
  rocketTimer = false;
  rocketCounter = 0;
  lifes = 2;
  leftBranch = new LeftBranch(0, -100, 50, random(70, 110));
  rightBranch = new RightBranch(2, -200, 150, random(70, 110));
  monkey = new Monkey(360, 100, 80, monkeyClimbImages);
  score = new Score(0);
  hearts = [];
  bannanas = [];
  rocks = [];
  stars = [];
  rockets = [];
}
// only rocketCollision acctually does something 
let heartCollision = true;
let bannanaCollision = true;
let rockCollision = true;
let starCollision = true;
let rocketCollision = true;
let hearts = [];
let bannanas = [];
let rocks = [];
let stars = [];
let rockets = [];
// works as a timer for the game and was supposed to controll the speed depending on where how big its value was  
let accelerator = 0;
let speed = 1;
//start value of powerups and rock
let bannanaInterval = 0;
let rockInterval = 0;
let heartInterval = 0;
let starInterval = 0;
let rocketInterval = 0;
let playAgainButton = new Button(800 / 2 - 30, 200, 100, 40, 20, "Play Again");
let treeStem = new TreeStem(400, 0, 350, 800);
let playButton = new Button(800 / 2 - 75, 300, 100, 40, 20, "Play");
let leftBranch = new LeftBranch(0, 400, 50, 90);
let rightBranch = new RightBranch(2, 450, 120, 90);
let monkey = new Monkey(360, 100, 80, monkeyClimbImages);
let score = new Score(0);
let gameOverScore = new GameOverScore(0);
let gameOver = false;
let lifes = 2;
let bannanaPoints = 0;
let starTimer = false;
let rocketTimer = false;
let starCounter = 0;
let rocketCounter = 0;
//when gameIsRunning is true all variables that are moving can move and when its false all variables stop moving 
let gameIsRunning = true;
let gameHasStarted = false;

// we need to fix the draw function if you want to use import/export
function draw() {
  clear();
  background(backgroundImage);
  if (gameHasStarted === false) {
    startMenu();
  }
  // if mouse is pressed and the mouseX and mouseY are within the values defined in hitTest() the gameRestarting function is triggered and all the values reset
  if (mouseIsPressed) {
    if (playButton.hitTest(mouseX, mouseY)) {
      gameHasStarted = true;
      gameRestarting();
    }
  }
// when gameHasStarted is true all the necessary function for it to run start running
  if (gameHasStarted === true) {
    leftBranch.draw();
    rightBranch.draw();
    treeStem.draw();
    score.draw();

    score.s = Math.ceil(accelerator / 10) + bannanaPoints;
    gameOverScore.s = Math.ceil(accelerator / 10) + bannanaPoints;
    drawUiHearts();
    monkey.startAnimation();
    keyPressed();
    keyReleased();
    monkey.display();
    // same as before but here all the values are reset as if the game just started
    if (mouseIsPressed) {
      if (playAgainButton.hitTest(mouseX, mouseY)) {
        gameRestarting();
      }
    }
    if (gameIsRunning === true) {
      leftBranch.y += speed;
      rightBranch.y += speed;
      monkey.y += speed;
      accelerator += 1;
    }
  }

  //controlls monkey + animation starts
  function keyPressed() {
    if ((keyIsDown(UP_ARROW) || keyIsDown(87)) && gameIsRunning === true) {
      monkey.moveUp();
      monkey.y -= speed * 2;
    }

    if (keyIsDown(DOWN_ARROW) && gameIsRunning === true) {
      monkey.y += speed;
      monkey.moveDown();
    }
    if ((keyIsDown(LEFT_ARROW) || keyIsDown(65)) && gameIsRunning === true) {
      monkey.x -= speed + 1;
      monkey.moveLeft();
    }

    if ((keyIsDown(RIGHT_ARROW) || keyIsDown(68)) && gameIsRunning === true) {
      monkey.x += speed + 1;
      monkey.moveRight();
    }
  }

  function keyReleased() {
    if (
      !keyIsDown(UP_ARROW) &&
      !keyIsDown(DOWN_ARROW) &&
      !keyIsDown(LEFT_ARROW) &&
      !keyIsDown(RIGHT_ARROW) &&
      !keyIsDown(87) &&
      !keyIsDown(65) &&
      !keyIsDown(68)
    ) {
      monkey.stopAnimation(); //when stop moving the monkey animation stops
    }
  }

  if (lifes === 0) {
    gameOver = true;
  }
  if (monkey.y > 900) {
    gameOver = true;
  }
  //when gameOver is true  gameisRunning us set to false which 
  if (gameOver === true) {
    gameIsRunning = false;
    playAgainMenu();

    lifes = 0;
  }
  //startimer controlls how long the star powerup is active. how long it is active and what it does is defined in drawStars 
  if (starTimer === true) {
    starCounter += 1;
    monkey.monkeyClimbImages = starClimbImages;
  } else {
    monkey.monkeyClimbImages = monkeyClimbImages;
  }
  //controlls when the diffrent power ups functions are called
  if (accelerator > 200) {
    drawRocks();
    drawBannanas();
  }

  if (accelerator > 4000) {
    drawHearts();
  }

  if (accelerator > 8000) {
    drawStars();
  }

  if (accelerator > 10000) {
    speed = 1;
    drawRockets();
  }
//rockettimer controlls how long the rocketpowerup is active and makes monkey go to the middle of the screen, how long it is active is defined in drawRockets
  if (rocketTimer === true) {
    rocketCounter += 1;
    monkey.monkeyClimbImages = rocketClimbImages;
    if (monkey.x > 360) {
      monkey.x -= 2;
    } else {
      monkey.x += 2;
    }
    if (monkey.y <= 300) {
      monkey.y += speed * 2;
    }
    if (monkey.y > 300) {
      monkey.y -= speed * 5;
    }
    speed += 3;
  }
//branches respawns with new values each time its y value goes bellow 800
  if (leftBranch.y > 800) {
    leftBranch.y = random(-150, -200);
    leftBranch.x = random(10, 70);
    leftBranch.leafSize = random(70, 110);
  }
  if (rightBranch.y > 800) {
    rightBranch.y = random(-220, -400);
    rightBranch.width = random(180, 100);
    rightBranch.leafSize = random(70, 110);
  }
//monkey cant go outside tree
  if (monkey.x < 225 - monkey.size / 2) {
    monkey.x = 225 - monkey.size / 2;
  }
  if (monkey.x > 575 - monkey.size / 2) {
    monkey.x = 575 - monkey.size / 2;
  }
 
}
window.draw = draw;



