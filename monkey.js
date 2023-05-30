export default class Monkey {
  constructor(x, y, size, monkeyClimbImages) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.monkeyClimbImages = monkeyClimbImages;
    this.animationIndex = 0;
    this.animationSpeed = 0.2; //changing speed between 2 frames
    this.isMoving = false; //check if the monkey moves
    this.animationFrame = null; 
    this.image = null;
  }

  moveUp() {
    this.startAnimation();
  }

  moveDown() {
    this.startAnimation();
  }

  moveLeft() {
    this.startAnimation();
  }

  moveRight() {
    this.startAnimation();
  }

  startAnimation() {
    if (!this.isMoving) {  //==> this.isMoving = true
      this.isMoving = true;
      this.animate();
    }
  }

  animate() { 
    this.animationIndex += this.animationSpeed;
    if (this.animationIndex >= this.monkeyClimbImages.length) {
      this.animationIndex = 0; //ensure animationIndex do not exceed the limit, to loop the animation
    }
    this.image = this.monkeyClimbImages[Math.floor(this.animationIndex)]; //monkeyClimbImages has 2 pics [0 or 1] based on the value of animationIndex
    this.animationFrame = requestAnimationFrame(() => this.animate()); //ensure the loop
  }

  stopAnimation() {
    this.isMoving = false;
    this.animationIndex = 0;
    cancelAnimationFrame(this.animationFrame); //stop animation
  }

  display() {
    if (this.image) {
      image(this.image, this.x, this.y, this.size, this.size);
    }
  }
}
