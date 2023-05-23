export class Heart {
  constructor(x, y, size, image) {
    this.x = x;
    this.y = y;

    this.size = size;
    this.image = image;
  }
  draw() {
    image(this.image, this.x, this.y, this.size, this.size);
  }
}
