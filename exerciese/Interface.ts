
interface User{
    readonly dbid:number,
    email:string,
    username:string,
    userId:string, 
    price:number,
    googleId?:number,
    startTrials:()=>string,
    getCoupon(name:string,value:number):number

}
interface User{
    githubToken:string
}
interface Admin extends User{
    role:'Admin'|'SuperAdmin'
}

let user:Admin={
    dbid:2389,
    username:'Patrick',
    email:'ppp@gmail.com',
    userId:crypto.randomUUID(),
    price:23,
    role:'SuperAdmin',
    githubToken:crypto.randomUUID(),
    startTrials:()=>`Trial has started Already!`,
    getCoupon:(name,off)=>(off/100)*user.price
}
//user.dbid=2334;
console.log(user)
console.log(user.getCoupon('Pazzo',10))