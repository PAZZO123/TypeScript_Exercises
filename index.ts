
type Address={
    city:string
    street:string
    country:string

}
type Pizza={
    id:number
    name:string
    price:number
    //address?:Address //optional properties
}
type Status="ordered"|"completed"
type Order={
    id:number
    pizza:Pizza
    status:Status
}
const menu :Pizza[]= [
    {id:1, name: "Margherita", price: 8 },
    {id:2, name: "Pepperoni", price: 10 },
    {id:3, name: "Hawaiian", price: 10 },
    {id:4, name: "Veggie", price: 9 },
]
 let cashInRegister=100
 const orderQueue:Order[]=[]
 let nextOrderId=1
 
 //function to add pizza in the menu
 function addNewPizza(pizza:Pizza):void{
     menu.push(pizza)
 }
 
 function placeOrder(Pizzas:string):Order|undefined{
     const orderedPizza=menu.find(pizzaObj=>pizzaObj.name===Pizzas)
     if(!orderedPizza){
        console.error('no such Pizza in the menu');
        return
     }
     cashInRegister+=orderedPizza.price
     const newOrder:Order={id:nextOrderId++,pizza:orderedPizza, status:'ordered'}
     orderQueue.push(newOrder)
     return newOrder
 }
 function completeOrder(id:number):Order|undefined{
     const order=orderQueue.find(order=>order.id === id)
     if(!order){
        console.error(`Order with ${id} Is not available in menu`)
        return
     }
     order.status='completed'
     return order
 }
 function getPizzaDetails(identifier:string|number):Pizza|undefined{
 if(typeof identifier ==='string'){
    return menu.find(pizza=>pizza.name.toLowerCase()=== identifier.toLowerCase())
 }
 else if(typeof identifier === 'number'){
    return menu.find(pizza=>pizza.id=== identifier)
 }
 else{
    throw new Error('Parameters must be string or number enter a valid parameter')
 }
 }
 addNewPizza({id:5, name: "Chicken Bacon Ranch", price: 12 })
addNewPizza({id:6, name: "BBQ Chicken", price: 12 })
addNewPizza({id:7, name: "Spicy Sausage", price: 11 })

placeOrder("Chicken Bacon Ranch")
completeOrder(1)
completeOrder(2)

console.log("Menu:", menu)
console.log("Cash in register:", cashInRegister)
console.log("Order queue:", orderQueue)
console.log(getPizzaDetails(2))
console.log(getPizzaDetails(true))