class RightBranch {
  constructor(x, y, width) {
    this.x = x;
    this.y = y;
    this.width = width;
  }
  draw() {
    push();
    translate(this.x, this.y);
    fill(200, 60, 30);
    rect(572, 0, this.width, 100);
    pop();
  }
}
