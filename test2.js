class RightBranch {
  constructor(x, y, width, leafSize) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.leafSize = leafSize;
  }
  draw() {
    push();
    strokeWeight(0);
    translate(this.x, this.y);
    fill(96, 56, 19);
    rect(572, 0, this.width, 100);
    fill(0, 155, 0);
    ellipse(552 + this.width, 0, this.leafSize);
    ellipse(572 + this.width, 50, this.leafSize);
    ellipse(552 + this.width, 100, this.leafSize);
    ellipse(532 + this.width, 50, this.leafSize);
    pop();
  }
}
let rightBranch = new RightBranch(2, 450, random(100, 150), random(90, 100));
function draw() {
  rightBranch.draw();
}
