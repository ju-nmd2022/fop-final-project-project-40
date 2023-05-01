createCanvas(800, 700);
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
    fill(100, 60, 30);
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
    translate(x, y);
    fill(100, 60, 30);
    rect(572, 0, width, 100);
    pop();
  }
}

let lBranchY = random(500, 0);
let rBranchX = random(180, 100);
let rBranchY = random(300, 500);
let lBranchX = random(100, 10);
let speed = 1;
let leftBranch = new LeftBranch(2, lBranchY, lBranchX);
let rightBranch = new RightBranch(2, rBranchY, rBranchX);

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
  monkey.draw();
  monkey.y += speed;
  leftBranch.draw();
  leftBranch.y += speed;
  rightBranch.draw();
  rightBranch.y += speed;
}
