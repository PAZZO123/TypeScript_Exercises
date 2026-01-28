"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Rectangle {
    width;
    height;
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
class Triangle extends Rectangle {
    constructor(width, height) {
        super(width, height);
    }
    getArea() {
        return 0.5 * this.width * this.height;
    }
}
let s = new Triangle(2, 2);
console.log(s.getArea()); //484
//# sourceMappingURL=readonly.js.map