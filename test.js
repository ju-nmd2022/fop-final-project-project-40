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
