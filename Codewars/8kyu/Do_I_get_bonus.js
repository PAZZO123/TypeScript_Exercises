"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function bonusTime(salary, bonus) {
    if (bonus) {
        return `£${salary * 10}`;
    }
    return `£${salary}`;
}
console.log(bonusTime(1000, true)); //#10000
//# sourceMappingURL=Do_I_get_bonus.js.map