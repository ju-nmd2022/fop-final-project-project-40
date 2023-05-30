export default class TreeStem {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  draw() {
    push();
    strokeWeight(0);
    translate(this.x, this.y);
    fill(96, 56, 19);
    rect(-this.width / 2, 0, this.width, this.height);
    pop();
  }
}
