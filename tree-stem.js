export class TreeStem {
    constructor(x, y, width, height) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
    }
  
    draw() {
      push();
      translate(this.x, this.y);
      fill(139, 69, 19); 
      rect(-this.width / 2, 0, this.width, this.height);
      pop();
    }
}  
  
  
  
  
  
  
  
  
  