type CarYear=string
type CarName=string
type CarPrice=number

type Car={
    name:CarName,
    year:CarYear,
    price:CarPrice
}
let carName:CarName='Volvo'
let carYear:CarYear='2024'
let carPrice:CarPrice=400
const Toyota:Car={
    name:carName,
    year:carYear,
    price:carPrice
}
console.log(Toyota)//{ name: 'Volvo', year: '2024', price: 400 }




//type alliases and type merging 
type UserName={username:string}
type Password={password:string}
type isPaid={ispaid:boolean}
type User=UserName & Password & isPaid & {
email:string
}
let getUser=(user:User):User=>user

getUser({username:'patrick',password:'abcdfnn',ispaid:true,email:'ddn'})