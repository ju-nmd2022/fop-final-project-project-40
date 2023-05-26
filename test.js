let x, y; // position
let angle = 0; // angle of rotation
let speed = 0.02; // angular speed
let radiusX; // x-axis radius of rotation
let radiusY; // y-axis radius of rotation
let diameter = 400; // size
let rockInterval = 0;
let rocks = [];
let laserCounter = 0;
let lasers = true;

function setup() {
  frameRate(60);
  createCanvas(800, 600);
  x = 100;
  y = 100;
  radiusX = random(100, 150); // Randomize the x-axis radius
  radiusY = random(10, 20); // Randomize the y-axis radius
}

class Monkey {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.image = image;
  }
  draw() {
    rect(this.x, this.y, this.size);
  }
}
let monkey = new Monkey(400, 500, 40, 40);
class Rock {
  constructor(x, y, velocity, size) {
    this.x = x;
    this.y = y;
    this.velocity = velocity;
    this.size = size;
    this.image = image;
  }
  draw() {
    push();
    fill(0, 255, 0);
    strokeWeight(0);
    rect(this.x, this.y, 10, this.size);
    pop();
  }
}
function drawRocks() {
  for (let i = rocks.length - 1; i >= 0; i--) {
    let rock = rocks[i];
    rock.y += rock.velocity;
    rock.draw();
  }
  rockInterval -= 2;
  if (rockInterval <= 0 && lasers === true) {
    let rock = new Rock(x, y, 5, 50);
    rocks.push(rock);
    rockInterval = random(200, 300);
  }
  laserCounter += 1;
  if (laserCounter === 1000) {
    lasers = false;
  }
}
class BigLaser {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  draw() {
    push();
    fill(0, 255, 0);
    strokeWeight(0);
    rect(this.x, this.y, this.width, this.height);
    pop();
  }
}
class GameOverScore {
  constructor(x, y, text) {
    this.x = x;
    this.y = y;
    this.text = text;
  }
  draw() {
    pop();
    textSize(100);
    textAlign(CENTER);
    text(this.text, this.x, this.y);
    push();
  }
}
let gameOverScore = new GameOverScore(100, 40, 40);

function draw() {
  background(220);
  drawRocks();
  monkey.draw();
  gameOverScore.draw();

  if (lasers === false) {
    let bigLaser = new BigLaser(x - 30, y, 50, 600);
    bigLaser.draw();
  }
  // Update position based on the rotation
  x = 300 + cos(angle) * radiusX;
  y = 100 + sin(angle) * radiusY;

  // Update the angle for smooth rotation
  angle += speed;

  // Draw ellipse
  ellipse(x, y - 30, 200, 110);
  ellipse(x, y, diameter, 100);
}
