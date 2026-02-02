"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function stringExpansion(s) {
    let times = 1;
    return s.split('').map((char) => {
        if (!isNaN(parseInt(char))) {
            times = +char;
            return "";
        }
        else
            return char.repeat(times);
    }).join('');
}
console.log(stringExpansion("3bnmjsjs")); //bbbnnnmmmjjjuiijsssjjjsss
//# sourceMappingURL=simpesimplesimple_string_expansion.js.map