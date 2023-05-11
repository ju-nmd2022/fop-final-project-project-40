
export default class Items {
    constructor (x, y) {
        this.x = x;
        this.y = y;
        this.frameX = 0;
        this.frameY = 0;
        this.fsp = 20;
    }

}

class Heart extends Items {
    constructor() {
        super();

    }

    collected() {

    }

}

class Star extends Items {
    constructor() {
        super();

    }

    collected() {
        
    }

}

class Stone extends Items {
    
}