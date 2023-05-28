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
  ];
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
  for (let i = rocks.length - 1; i >= 0; i--) {
    let rock = rocks[i];
    if (gameIsRunning === true) {
      rock.y += rock.velocity + speed;
    }

    rock.draw();
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
    if (monkey.y + rock.size * 3 < rock.y) {
      rockCollision = true;
    }
    if (rocketTimer === true) {
      rock.y += rock.velocity + speed * 3;
    }
  }
  rockInterval -= speed / 2;
  if (rockInterval <= 0 && accelerator < 2000) {
    let rock = new Rock(
      random(70, 730),
      -200,
      random(1, 3),
      random(80, 150),
      rockImage
    );
    rocks.push(rock);
    rockInterval = random(200, 300) / speed;
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

function drawBannanas() {
  for (let i = bannanas.length - 1; i >= 0; i--) {
    let bannana = bannanas[i];
    if (gameIsRunning === true) {
      bannana.y += speed;
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
      bannana.y += speed * 3;
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
function drawHearts() {
  for (let i = hearts.length - 1; i >= 0; i--) {
    let heart = hearts[i];
    if (gameIsRunning === true) {
      heart.y += speed;
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
      heart.y += speed * 3;
    }
  }
  heartInterval -= speed / 10;
  if (heartInterval <= 0) {
    let heart = new Heart(random(245, 555), random(-50, -555), 50, heartImage);
    hearts.push(heart);
    heartInterval = random(500, 1000);
  }
}

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
      star.y += speed;
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
    if (
      monkey.x > star.x - star.size / 2 &&
      monkey.x < star.x + star.size / 2 &&
      monkey.y > star.y - star.size / 2 &&
      monkey.y < star.y + star.size / 2
    ) {
      starTimer = true;
    }
    if (starCounter >= 1000) {
      starTimer = false;
    }
    if (starTimer === false) {
      starCounter = 0;
    }
    if (rocketTimer === true) {
      star.y += speed * 3;
    }
  }
  starInterval -= speed / 2;
  if (starInterval <= 0) {
    let star = new Star(random(245, 555), -50, 1, 50, starImage);
    stars.push(star);
    starInterval = random(1500, 2500);
  }
}

function drawRockets() {
  for (let i = rockets.length - 1; i >= 0; i--) {
    let rocket = rockets[i];
    if (gameIsRunning === true) {
      rocket.y += speed;
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
      rocket.y += speed * 3;
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
let accelerator = 0;
let speed = 1;
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
let starCounter = 0;
let rocketTimer = false;
let rocketCounter = 0;
let gameIsRunning = true;
let gameRestart = false;
let gameHasStarted = false;

// we need to fix the draw function if you want to use import/export
function draw() {
  clear();
  background(backgroundImage);
  if (gameHasStarted === false) {
    startMenu();
  }
  if (mouseIsPressed) {
    if (playButton.hitTest(mouseX, mouseY)) {
      gameHasStarted = true;
      gameRestarting();
    }
  }

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

  //controlls monkey
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
      monkey.stopAnimation();
    }
  }

  if (lifes === 0) {
    gameOver = true;
  }
  if (monkey.y > 900) {
    gameOver = true;
  }
  if (gameOver === true) {
    gameIsRunning = false;
    playAgainMenu();

    lifes = 0;
  }
  if (starTimer === true) {
    starCounter += 1;
    monkey.monkeyClimbImages = starClimbImages;
  } else {
    monkey.monkeyClimbImages = monkeyClimbImages;
  }
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

  if (accelerator > 12000) {
    speed = 1;
    drawRockets();
  }

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
    speed += speed * 3;
  }

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

  if (monkey.x < 225 - monkey.size / 2) {
    monkey.x = 225 - monkey.size / 2;
  }
  if (monkey.x > 575 - monkey.size / 2) {
    monkey.x = 575 - monkey.size / 2;
  }
  // controlls pace of the game
}
window.draw = draw;

