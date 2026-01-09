type CarYear=string
type CarName=String
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