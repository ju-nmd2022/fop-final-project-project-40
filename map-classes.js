import Heart from "./heart.js";
createCanvas(800, 650);
frameRate(144);

class Monkey {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  draw() {
    push();
    translate(this.x, this.y);
    fill(0, 200, 0);
    rect(375, 400, 50);
    pop();
  }
}

class LeftBranch {
  constructor(x, y, width) {
    this.x = x;
    this.y = y;
    this.width = width;
  }
  draw() {
    push();
    translate(this.x, this.y);
    fill(200, 60, 30);
    rect(this.width, 0, 300, 100);
    pop();
  }
}

class RightBranch {
  constructor(x, y, width) {
    this.x = x;
    this.y = y;
    this.width = width;
  }
  draw() {
    push();
    translate(this.x, this.y);
    fill(200, 60, 30);
    rect(572, 0, this.width, 100);
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

class Rock {
  constructor(x, y, velocity, size) {
    this.x = x;
    this.y = y;
    this.velocity = velocity;
    this.size = size;
  }
  draw() {
    fill(100, 100, 100);
    ellipse(this.x, this.y, this.size);
  }
}

function drawRocks() {
  for (let i = rocks.length - 1; i >= 0; i--) {
    let rock = rocks[i];
    rock.y += rock.velocity + speed;
    rock.draw();
    if (
      monkey.x + 375 > rock.x - rock.size / 2 &&
      monkey.x + 375 < rock.x + rock.size / 2 &&
      monkey.y + 400 > rock.y - rock.size / 2 &&
      monkey.y + 400 < rock.y + rock.size / 2 &&
      rockCollision === true &&
      starTimer === false
    ) {
      lifes -= 1;
      rockCollision = false;
    }
    if (monkey.y > rock.y + rock.size / 2) {
      rockCollision = true;
    }
  }
  rockInterval -= speed / 2;
  if (rockInterval <= 0) {
    let rock = new Rock(random(70, 730), -50, random(1, 3), random(50, 100));
    rocks.push(rock);
    rockInterval = random(200, 300) / speed;
  }
}

class Bannana {
  constructor(x, y, velocity, size) {
    this.x = x;
    this.y = y;
    this.velocity = velocity;
    this.size = size;
  }
  draw() {
    fill(255, 255, 0);
    ellipse(this.x, this.y, this.size);
  }
}

function drawBannanas() {
  for (let i = bannanas.length - 1; i >= 0; i--) {
    let bannana = bannanas[i];
    bannana.y += speed;
    bannana.draw();

    if (
      monkey.x + 375 > bannana.x - bannana.size / 2 &&
      monkey.x + 375 < bannana.x + bannana.size / 2 &&
      monkey.y + 400 > bannana.y - bannana.size / 2 &&
      monkey.y + 400 < bannana.y + bannana.size / 2 &&
      bannanaCollision === true
    ) {
      bannanaPoints += 1000;
      bannanaCollision = false;
      bannanas.splice(i, 1);
    }
    if (monkey.y + 350 > bannana.y + bannana.size / 2) {
      bannanaCollision = true;
    }
  }
  bannanaInterval -= speed / 2;
  if (bannanaInterval <= 0) {
    let bannana = new Bannana(random(245, 555), -50, 1, 50);
    bannanas.push(bannana);
    bannanaInterval = random(300, 400) / speed;
  }
}

function drawHearts() {
  for (let i = hearts.length - 1; i >= 0; i--) {
    let heart = hearts[i];
    heart.y += speed;
    heart.draw();

    if (
      monkey.x + 375 > heart.x - heart.size / 2 &&
      monkey.x + 375 < heart.x + heart.size / 2 &&
      monkey.y + 400 > heart.y - heart.size / 2 &&
      monkey.y + 400 < heart.y + heart.size / 2 &&
      heartCollision === true &&
      lifes < 3
    ) {
      lifes += 1;
      hearts.splice(i, 1);
    }
    if (monkey.y + 350 > heart.y + heart.size / 2) {
      heartCollision = true;
    }
  }
  heartInterval -= speed / 10;
  if (heartInterval <= 0) {
    let heart = new Heart(random(245, 555), -50, 1, 50);
    hearts.push(heart);
    heartInterval = random(300, 400) / speed;
  }
}
function drawUiHearts() {
  if (lifes === 1) {
    uiHeart1.draw();
  } else if (lifes === 2) {
    uiHeart1.draw();
    uiHeart2.draw();
  } else if (lifes === 3) {
    uiHeart1.draw();
    uiHeart2.draw();
    uiHeart3.draw();
  } else {
    gameOver = true;
  }
}
class Star {
  constructor(x, y, velocity, size) {
    this.x = x;
    this.y = y;
    this.velocity = velocity;
    this.size = size;
  }
  draw() {
    fill(255, 255, 150);
    ellipse(this.x, this.y, this.size);
  }
}

function drawStars() {
  for (let i = stars.length - 1; i >= 0; i--) {
    let star = stars[i];
    star.y += speed;
    star.draw();

    if (
      monkey.x + 375 > star.x - star.size / 2 &&
      monkey.x + 375 < star.x + star.size / 2 &&
      monkey.y + 400 > star.y - star.size / 2 &&
      monkey.y + 400 < star.y + star.size / 2 &&
      starCollision === true
    ) {
      starCollision = false;
      stars.splice(i, 1);
    }
    if (monkey.y + 350 > star.y + star.size / 2) {
      starCollision = true;
    }
    if (
      monkey.x + 375 > star.x - star.size / 2 &&
      monkey.x + 375 < star.x + star.size / 2 &&
      monkey.y + 400 > star.y - star.size / 2 &&
      monkey.y + 400 < star.y + star.size / 2
    ) {
      starTimer = true;
    }
    if (starCounter >= 1500) {
      starTimer = false;
    }
    if (starTimer === false) {
      starCounter = 0;
    }
  }
  starInterval -= speed / 2;
  if (starInterval <= 0) {
    let star = new Star(random(245, 555), -50, 1, 50);
    stars.push(star);
    starInterval = random(300, 400) / speed;
  }
}
class Rocket {
  constructor(x, y, velocity, size) {
    this.x = x;
    this.y = y;
    this.velocity = velocity;
    this.size = size;
  }
  draw() {
    fill(0, 0, 0);
    ellipse(this.x, this.y, this.size);
  }
}

function drawRockets() {
  for (let i = rockets.length - 1; i >= 0; i--) {
    let rocket = rockets[i];
    rocket.y += speed;
    rocket.draw();

    if (
      monkey.x + 375 > rocket.x - rocket.size / 2 &&
      monkey.x + 375 < rocket.x + rocket.size / 2 &&
      monkey.y + 400 > rocket.y - rocket.size / 2 &&
      monkey.y + 400 < rocket.y + rocket.size / 2 &&
      rocketCollision === true
    ) {
      rocketCollision = false;
      rockets.splice(i, 1);
    }
    if (monkey.y + 350 > rocket.y + rocket.size / 2) {
      rocketCollision = true;
    }
    if (
      monkey.x + 375 > rocket.x - rocket.size / 2 &&
      monkey.x + 375 < rocket.x + rocket.size / 2 &&
      monkey.y + 400 > rocket.y - rocket.size / 2 &&
      monkey.y + 400 < rocket.y + rocket.size / 2
    ) {
      rocketTimer = true;
    }
    if (rocketCounter >= 1500) {
      rocketTimer = false;
    }
    if (rocketTimer === false) {
      rocketCounter = 0;
    }
  }
  rocketInterval -= speed / 2;
  if (rocketInterval <= 0) {
    let rocket = new Rocket(random(245, 555), -50, 1, 50);
    rockets.push(rocket);
    rocketInterval = random(300, 400) / speed;
  }
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
let leftBranch = new LeftBranch(0, random(500, 155), random(100, 10));
let rightBranch = new RightBranch(2, random(300, 500), random(180, 100));
let uiHeart1 = new Heart(770, 30, 0, 40);
let uiHeart2 = new Heart(720, 30, 0, 40);
let uiHeart3 = new Heart(670, 30, 0, 40);
let score = new Score(0);
let monkey = new Monkey(0, -300);
let gameOver = false;
let lifes = 2;
let bannanaPoints = 0;
let starTimer = false;
let starCounter = 0;
let rocketTimer = false;
let rocketCounter = 0;

function backGround() {
  background(0, 110, 255);
  noStroke();
  fill(100, 60, 30);
  rect(224, 0, 350, height);
}

// we need to fix the draw function if you want to use import/export
function draw() {
  clear();
  backGround();
  leftBranch.draw();
  leftBranch.y += speed;
  rightBranch.draw();
  rightBranch.y += speed;
  monkey.draw();
  monkey.y += speed;
  accelerator += 1;
  score.s = Math.ceil(accelerator / 10) + bannanaPoints;
  score.draw();
  console.log(rocketTimer);
  console.log(rocketCounter);
  drawUiHearts();

  // controlls pace of the game
  if (accelerator > 200) {
    speed = 1;
    drawRocks();
    drawBannanas();
    drawStars();
    drawHearts();
    drawRockets();
  }
  if (starTimer === true) {
    starCounter += 1;
  }
  if (rocketTimer === true) {
    rocketCounter += 1;
    if (monkey.x > 0) {
      monkey.x -= 2;
    } else {
      monkey.x += 2;
    }
    monkey.y = 0;

    speed = speed * 3;
  }

  //controlls monkey
  if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
    monkey.y += -speed * 2;
  }

  if (keyIsDown(DOWN_ARROW)) {
    monkey.y += +speed;
  }
  if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
    monkey.x += -speed - 1;
  }

  if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
    monkey.x += +speed + 1;
  }

  if (leftBranch.y > 800) {
    leftBranch.y = random(-100, -150);
    leftBranch.x = random(100, 10);
  }
  if (rightBranch.y > 800) {
    rightBranch.y = random(-220, -400);
    rightBranch.width = random(180, 100);
  }

  if (
    (monkey.x < -155 && monkey.y + 420 < leftBranch.x) ||
    (monkey.x < -155 && monkey.y + 340 > leftBranch.y)
  ) {
    monkey.x = -155;
  }
  if (
    (monkey.x > 155 && monkey.y + 420 < rightBranch.y) ||
    (monkey.x > 155 && monkey.y + 340 > rightBranch.y)
  ) {
    monkey.x = 155;
  }
  //Left walls
  if (monkey.x < leftBranch.x - 380) {
    monkey.x = leftBranch.x - 380;
  }
  if (monkey.x < -155 && monkey.y + 415 < leftBranch.y) {
    monkey.y = leftBranch.y - 415;
  }

  if (monkey.x < -155 && monkey.y + 345 > leftBranch.y) {
    monkey.y = leftBranch.y - 345;
  }

  //Right walls

  if (monkey.x > rightBranch.width + 160) {
    monkey.x = rightBranch.width + 160;
  }
  if (monkey.x > 155 && monkey.y + 415 < rightBranch.y) {
    monkey.x = rightBranch.y - 415;
  }

  if (monkey.x > 155 && monkey.y + 345 > rightBranch.y) {
    monkey.y = rightBranch.y - 345;
  }
}



