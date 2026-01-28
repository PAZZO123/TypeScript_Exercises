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
//Inhertance
class SubUser extends User {
    isFamily = true;
    changeCount() {
        this.courseCount = 4;
    }
}
let patty = new User("Patrick", "p@p.com");
//patty.deleteToken()
patty.getAppleEmail;
patty.courseCounts;
patty.CourseCount = 50;
//# sourceMappingURL=Classes.js.map