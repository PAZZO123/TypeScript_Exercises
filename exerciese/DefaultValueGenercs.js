"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NamedValue {
    name;
    value;
    constructor(name) {
        this.name = name;
    }
    getValue() {
        return this.value;
    }
    setValue(newValue) {
        this.value = newValue;
    }
    toString() {
        return ` ${this.name}: ${this.value}`;
    }
}
let n = new NamedValue('Patrick');
n.setValue(24);
console.log(n.toString());
//# sourceMappingURL=DefaultValueGenercs.js.map