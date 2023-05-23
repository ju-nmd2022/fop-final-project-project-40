export class Monkey {
  constructor(x, y, size, monkeyClimbImages) {
    this.x = x;
    this.y = y;
    this.size = size;
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
    if (this.image) {
      image(this.image, this.x, this.y, this.size, this.size);
    }
  }
}
