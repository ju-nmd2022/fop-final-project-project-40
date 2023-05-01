let monkeyX = 0;
let monkeyY = 0;
let rBranchY = random(300, 500);
let lBranchY = random(500, 0);
let rBranchX = random(180, 100);
let lBranchX = random(100, 10);
let speed = 1;
let acceleratorY = 0;
let score = acceleratorY;

createCanvas(800, 600);
frameRate(144);
//tree and sky
function backGround() {
  background(0, 110, 255);
  noStroke();
  fill(100, 60, 30);
  rect(224, 0, 350, height);
}
//branches
function leftBranch(x, y, width) {
  push();
  translate(x, y);
  fill(100, 60, 30);
  rect(width, 0, 300, 100);
  pop();
}
function rightBranch(x, y, width) {
  push();
  translate(x, y);
  fill(100, 60, 30);
  rect(572, 0, width, 100);
  pop();
}

//monkey
function monkey(x, y) {
  push();
  translate(x, y);
  fill(0, 200, 0);
  rect(375, 400, 50);

  pop();
}
//makes it possible to creates a score and we can controll the speed based its y value
function accelerator(x, y) {
  push();
  translate(x, y);
  fill(0, 0, 0);
  rect(10, 0, 40);
  pop();
}
//score based on accelerators y value
function score2(s) {
  push();
  textSize(32);
  fill(0, 0, 0);
  text(s, 10, 30);
  fill(0, 0, 0, 70);
  text(s, 10, 60);

  pop();
}

function draw() {
  backGround();
  rightBranch(2, rBranchY, rBranchX);
  leftBranch(1, lBranchY, lBranchX);
  accelerator(1, acceleratorY);
  score2(score);
  monkey(monkeyX, monkeyY);

  score = acceleratorY;
  //score is now smaller
  score = Math.ceil(score / 10);

  //monkey and branches moves down crating illution of climbing
  monkeyY = monkeyY + speed;
  lBranchY = lBranchY + speed;
  rBranchY = rBranchY + speed;
  acceleratorY = acceleratorY + 1;
  // moves on x and y axis if corespondent key is down
  if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
    monkeyY = monkeyY - speed * 2;
  }

  if (keyIsDown(DOWN_ARROW)) {
    monkeyY = monkeyY + speed;
  }
  if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
    monkeyX = monkeyX - speed;
  }

  if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
    monkeyX = monkeyX + speed;
  }

  if (acceleratorY > 600) {
    speed = 2;
  }

  if (acceleratorY > 1200) {
    speed = 3;
  }
  if (acceleratorY > 1800) {
    speed = 4;
  }
  if (acceleratorY > 2400) {
    speed = 5;
  }
  if (acceleratorY > 2800) {
    speed = 6;
  }
  if (acceleratorY > 3400) {
    speed = 7;
  }
  if (acceleratorY > 4000) {
    speed = 8;
  }
  if (acceleratorY > 4600) {
    speed = 9;
  }

  //branches spawn randomly between the two values

  if (lBranchY > 800) {
    lBranchY = random(-100, -150);
    lBranchX = random(100, 10);
  }
  if (rBranchY > 800) {
    rBranchY = random(-220, -400);
    rBranchX = random(180, 100);
  }
  //walls
  if (
    (monkeyX < -155 && monkeyY + 420 < lBranchY) ||
    (monkeyX < -155 && monkeyY + 340 > lBranchY)
  ) {
    monkeyX = -155;
  }
  if (
    (monkeyX > 155 && monkeyY + 420 < rBranchY) ||
    (monkeyX > 155 && monkeyY + 340 > rBranchY)
  ) {
    monkeyX = 155;
  }
  //Left walls
  if (monkeyX < lBranchX - 380) {
    monkeyX = lBranchX - 380;
  }
  if (monkeyX < -155 && monkeyY + 415 < lBranchY) {
    monkeyY = lBranchY - 415;
  }

  if (monkeyX < -155 && monkeyY + 345 > lBranchY) {
    monkeyY = lBranchY - 345;
  }

  //Right walls

  if (monkeyX > rBranchX + 160) {
    monkeyX = rBranchX + 160;
  }
  if (monkeyX > 155 && monkeyY + 415 < rBranchY) {
    monkeyY = rBranchY - 415;
  }

  if (monkeyX > 155 && monkeyY + 345 > rBranchY) {
    monkeyY = rBranchY - 345;
  }
}
