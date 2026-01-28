"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function pyramid(n) {
    let result = [];
    for (let i = 1; i <= n; i++) {
        let current = [];
        for (let j = 1; j <= i; j++) {
            current.push(1);
        }
        result.push(current);
    }
    return result;
}
//test cases
console.log(pyramid(3)); //[[1],[1,1],[1,1,1]]
//# sourceMappingURL=PyramidArray.js.map