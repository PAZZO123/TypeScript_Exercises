//Intersections
type Animal={name:string}
type Bear =Animal & {active:boolean }
const Dog:Bear={name:'Boy',active:true}
console.log(Dog)
//Unions
type Status = "success" | "error";
let response: Status = "success";
console.log(response)