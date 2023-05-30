class LeftBranch {
  constructor(x, y, width) {
    this.x = x;
    this.y = y;
    this.width = width;
  }
  draw() {
    push();
    translate(this.x, this.y);
    fill(200, 60, 30);
    rect(this.width, 0, 300, 100);
    pop();
  }
}
