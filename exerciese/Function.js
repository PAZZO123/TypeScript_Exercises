"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(a, b, ...rest) {
    return a + b + rest.reduce((a, p) => a + b, 0);
}
let value = add(3, 4, 5, 6, 7, 9);
console.log(value);
//# sourceMappingURL=Function.js.map