export default class Button {
  constructor(x, y, width, height, chamber, text) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.text = text;
    this.chamber = chamber;
  }
  draw() {
    push();
    strokeWeight(0);
    rect(this.x, this.y, this.width, this.height, this.chamber);
    textSize(this.height / 3);
    textAlign(CENTER);
    text(this.text, this.x + this.width / 2, this.y + this.height / 1.7);
    pop();
  }
  hitTest(x, y) {
    return (
      x > this.x &&
      x < this.x + this.width &&
      y > this.y &&
      y < this.y + this.height
    );
  }
}
