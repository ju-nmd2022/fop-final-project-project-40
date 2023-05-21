let speed = 2;
let rockInterval = speed;
let rocks = [];
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
  }
  rockInterval -= speed / 2;
  if (rockInterval <= 0) {
    let rock = new Rock(random(70, 730), -50, random(1, 3), random(50, 100));
    rocks.push(rock);
    rockInterval = random(100, 200) / speed;
  }
}

function draw() {
  clear();
  drawRocks();
}

// import { Monkey } from "./monkey.js";

// let backgroundImage,
//     monkeyLeftImage,
//     monkeyRightImage,

    

// function preload() {
//   backgroundImage = loadImage("pics/background.png");
//   monkeyLeftImage = loadImage("pics/monkey2.png");
//   monkeyRightImage = loadImage("pics/monkey1.png");
// }

// let monkey = new Monkey(0, -300, monkeyLeftImage, monkeyRightImage);

// function monkeyMove() {
//   if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
//     monkey.moveUp();
//   }

//   if (keyIsDown(DOWN_ARROW)) {
//     monkey.moveDown();
//   }
//   if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
//     monkey.moveLeft();
//   }

//   if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
//     monkey.moveRight();
//   }
// }
