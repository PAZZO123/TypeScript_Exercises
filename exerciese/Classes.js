"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    name;
    email;
    courseCount = 1;
    city = "Kigali";
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    //Getter
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCounts() {
        return this.courseCount;
    }
    //Private method
    deleteToken() {
        console.log('Token Deleted');
    }
    //Setter
    set CourseCount(newCount) {
        this.courseCount = newCount;
    }
}
//# sourceMappingURL=Classes.js.map