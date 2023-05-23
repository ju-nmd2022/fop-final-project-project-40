export class Monkey {
  constructor(x, y, monkeyClimbImages) {
    this.x = x;
    this.y = y;
    this.monkeyClimbImages = monkeyClimbImages;
    this.animationIndex = 0;
    this.animationSpeed = 0.2;
    this.isMoving = false;
    this.animationFrame = null;
    this.image = null; 
  }

  moveUp() {
    this.y -= speed * 2;
    this.startAnimation();
  }

  moveDown() {
    this.y += speed;
    this.startAnimation();
  }

  moveLeft() {
    this.x -= speed + 1;
    this.startAnimation();
  }

  moveRight() {
    this.x += speed + 1;
    this.startAnimation();
  }

  startAnimation() {
    if (!this.isMoving) {
      this.isMoving = true;
      this.animate();
    }
  }

  animate() {
    this.animationIndex += this.animationSpeed;
    if (this.animationIndex >= this.monkeyClimbImages.length) {
      this.animationIndex = 0;
    }
    this.image = this.monkeyClimbImages[Math.floor(this.animationIndex)];
    this.animationFrame = requestAnimationFrame(() => this.animate());
  }

  stopAnimation() {
    this.isMoving = false;
    this.animationIndex = 0;
    cancelAnimationFrame(this.animationFrame);
  }

  display() {
    if (this.image) { // Check if the image is not null
      image(this.image, this.x, this.y, 50, 50);
    }
  }
}