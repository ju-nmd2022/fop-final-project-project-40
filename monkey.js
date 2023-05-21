export class Monkey {
    constructor(x, y, monkeyLeftImage, monkeyRightImage) {
      this.x = x;
      this.y = y;
      this.monkeyLeftImage = monkeyLeftImage;
      this.monkeyRightImage = monkeyRightImage;
      this.image = this.monkeyRightImage;
    }
  
    moveUp() {
      this.y += -speed * 2;
    }
  
    moveDown() {
      this.y += +speed;
    }
  
    moveLeft() {
      this.x += -speed - 1;
      this.image = this.monkeyLeftImage;
    }
  
    moveRight() {
      this.x += +speed + 1;
      this.image = this.monkeyRightImage;
    }
  
    display() {
      image(this.image, this.x, this.y, 50, 50);
    }
  }

