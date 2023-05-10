
export default class Heart {
    constructor (x, y) {
        this.x = x;
        this.y = y;
    }

    draw() {
        fill(255, 192, 203);
        ellpise (this.x, this.y, 40);
    }
}