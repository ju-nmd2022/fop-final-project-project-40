

class Background {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.height = height;
    }

    draw() {
        background(0, x+10, y+55);
        noStroke();
        fill(100, 60, 30);
        rect(224, 0, 350, height);
    }
}
let background = new Background (100, 200);
 function draw() {
   background.draw();
 }