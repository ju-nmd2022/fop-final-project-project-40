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

let rocks = [];

class Rock {
  constructor(x, y, velocity) {
    this.x = x;
    this.y = y;
    this.velocity = velocity;
    this.size = random(50, 100);
  }
  draw() {
    fill(100, 100, 100);
    ellipse(this.x, this.y, this.size);
  }
  fall() {}
}

function drawRocks() {
  for (let i = rocks.length - 1; i >= 0; i--) {
    let rock = rocks[i];
    rock.draw();
    rock.fall();
  }
}

function spawnRocks() {
  let rock = new Rock(random(0, 800), -50, random(2, 5));
  rocks.push(rock);
}

let speed = 1;
let leftBranch = new LeftBranch(0, random(500, 155), random(100, 10));
let rightBranch = new RightBranch(2, random(300, 500), random(180, 100));

let monkey = new Monkey(0, -300);

function backGround() {
  background(0, 110, 255);
  noStroke();
  fill(100, 60, 30);
  rect(224, 0, 350, height);
}

function draw() {
  clear();
  backGround();

  leftBranch.draw();
  leftBranch.y += speed;
  rightBranch.draw();
  rightBranch.y += speed;
  monkey.draw();
  monkey.y += speed;
  spawnRocks();
  drawRocks();

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
