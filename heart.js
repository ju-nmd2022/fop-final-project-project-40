export class Heart {
  constructor(x, y, velocity, size, image) {
    this.x = x;
    this.y = y;
    this.velocity = velocity;
    this.size = size;
    this.image = image;
  }
  draw() {
    fill(255, 0, 0);
    ellipse(this.x, this.y, this.size);
  }
}
