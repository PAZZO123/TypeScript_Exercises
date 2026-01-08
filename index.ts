
type Address={
    city:string
    street:string
    country:string

}
type Pizza={
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
const menu = [
    { name: "Margherita", price: 8 },
    { name: "Pepperoni", price: 10 },
    { name: "Hawaiian", price: 10 },
    { name: "Veggie", price: 9 },
]
 let cashInRegister=100
 const orderQueue:Order[]=[]
 let nextOrderId=1
 
 //function to add pizza in the menu
 function addNewPizza(pizza:Pizza){
     menu.push(pizza)
 }
 
 function placeOrder(Pizzas:string){
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
 function completeOrder(id:number){
     const order=orderQueue.find(order=>order.id === id)
     if(!order){
        console.error(`Order with ${id} Is not available in menu`)
        return
     }
     order.status='completed'
     return order
 }
 addNewPizza({ name: "Chicken Bacon Ranch", price: 12 })
addNewPizza({ name: "BBQ Chicken", price: 12 })
addNewPizza({ name: "Spicy Sausage", price: 11 })

placeOrder("Chicken Bacon Ranch")
completeOrder(1)
completeOrder(2)

console.log("Menu:", menu)
console.log("Cash in register:", cashInRegister)
console.log("Order queue:", orderQueue)