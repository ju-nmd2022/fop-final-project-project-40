export class Monkey {
    constructor(x, y, monkeyLeftImg, monkeyRightImg) {
      this.x = x;
      this.y = y;
      this.monkeyLeftImg = monkeyLeftImg;
      this.monkeyRightImg = monkeyRightImg;
      this.image = this.monkeyRightImg;
    }
  
    moveUp() {
      this.y += -speed * 2;
    }
  
    moveDown() {
      this.y += +speed;
    }
  
    moveLeft() {
      this.x += -speed - 1;
      this.image = this.monkeyLeftImg;
    }
  
    moveRight() {
      this.x += +speed + 1;
      this.image = this.monkeyRightImg;
    }
  
    display() {
      image(this.image, this.x, this.y, 50, 50);
    }
  }