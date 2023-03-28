let monkeyX = 0;
let monkeyY = 0;
let rBranchY = 0;
let lBranchY = 0;
let speed = 1;
let acceleratorY = 0;

createCanvas(800, 600);

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
  rect(10, 0, 225, 40);
  pop();
}
function rightBranch() {}

//monkey
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
  rect(10, 20, 40);
  pop();
}

function draw() {
  backGround();
  rightBranch();
  leftBranch(1, lBranchY);
  monkey(monkeyX, monkeyY);
  monkeyY = monkeyY + speed;
  lBranchY = lBranchY + speed;
  if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
    monkeyY = monkeyY - speed * 3;
  }

  if (keyIsDown(DOWN_ARROW)) {
    monkeyY = monkeyY + speed * 3;
  }
  if (lBranchY > 600) {
    speed = 2;
  }
  if (lBranchY > 1200) {
    speed = 3;
  }
  if (lBranchY > 1800) {
    speed = 4;
  }
  if (lBranchY > 2400) {
    speed = 5;
  }
  if (lBranchY > 2800) {
    speed = 6;
  }
  if (lBranchY > 3400) {
    speed = 7;
  }
  if (lBranchY > 4000) {
    speed = 8;
  }
  if (lBranchY > 4600) {
    speed = 9;
  }
}
