let monkeyX = 0;
let monkeyY = 0;
let rBranchY = random(-300, -500);
let lBranchY = random(500, 0);
let speed = 1;
let acceleratorY = 0;
let score = acceleratorY;

createCanvas(800, 600);
frameRate(144);

function backGround() {
  background(0, 110, 255);
  //tree
  noStroke();
  fill(100, 60, 30);
  rect(224, 0, 350, height);
}
function leftBranch(x, y) {
  push();
  translate(x, y);
  fill(100, 60, 30);
  rect(10, 0, 300, 40);
  pop();
}
function rightBranch(x, y) {
  push();
  translate(x, y);
  fill(100, 60, 30);
  rect(572, 0, 180, 40);
  pop();
}

//monkeyw
function monkey(x, y) {
  push();
  translate(x, y);
  fill(0, 200, 0);
  rect(375, 400, 50);

  pop();
}
function accelerator(x, y) {
  push();
  translate(x, y);
  fill(0, 0, 0);
  rect(10, 0, 40);
  pop();
}
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
  rightBranch(2, rBranchY);
  leftBranch(1, lBranchY);
  accelerator(1, acceleratorY);
  score2(score);
  monkey(monkeyX, monkeyY);
  monkeyY = monkeyY + speed;
  score = acceleratorY;
  lBranchY = lBranchY + speed;
  rBranchY = rBranchY + speed;
  acceleratorY = acceleratorY + 1;
  if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
    monkeyY = monkeyY - speed * 3;
  }

  if (keyIsDown(DOWN_ARROW)) {
    monkeyY = monkeyY + speed * 3;
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
  if (lBranchY > 800) {
    lBranchY = random(-20, -100);
  }
  if (rBranchY > 800) {
    rBranchY = random(-220, -400);
  }
}
