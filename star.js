export default class Star {
  constructor(x, y, velocity, size, image) {
    this.x = x;
    this.y = y;
    this.velocity = velocity;
    this.size = size;
    this.image = image;
  }
  draw() {
    image(this.image, this.x, this.y, this.size, this.size);
  }
}
