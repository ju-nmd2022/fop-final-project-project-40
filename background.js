

export default class Background {
    constructor(x, y, height, width) {
        this.x = x;
        this.y = y;
        this.height = height;
    }

    draw() {
        background(0, 110, 255);
        noStroke();
        fill(100, 60, 30);
        rect(224, 0, 350, height);
    }

}