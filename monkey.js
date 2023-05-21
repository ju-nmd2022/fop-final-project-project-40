export class Monkey {
    constructor(x, y, monkeyLeftImg, monkeyRightImg) {
      this.x = x;
      this.y = y;
      this.monkeyLeftImg = monkeyLeft;
      this.monkeyRightImg = monkeyRight;
      this.image = this.monkeyRightImg;
    }
    // draw() {
    //   push();
    //   translate(this.x, this.y);
    //   fill(0, 200, 0);
    //   rect(375, 400, 50);
    //   pop();
    // }

    moveUp() {
        this.y += -speed * 2;
    }
    moveDown() {
        this.y += +speed;
    }
    moveLeft () {
        this.x += -speed - 1;
        this.image = this.monkeyLeftImg;
    }
    
    moveRight() {
        this.x += +speed + 1;
        this.image = this.monkeyRightImg;
    }

    display() {
        this.image(this.image, this.x, this.y, 50, 50);
    }
  }
  