export class Heart {
  constructor(x, y, velocity, size) {
    this.x = x;
    this.y = y;
    this.velocity = velocity;
    this.size = size;
  }
  draw() {
    fill(255, 0, 0);
    ellipse(this.x, this.y, this.size);
  }
}
