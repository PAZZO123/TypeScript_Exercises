function add (a:number, b:number, ...rest:number[]): number{
    return a+b+rest.reduce((a,p)=>a+b,0)
}
let value=add(3,4,5,6,7,9)
console.log(value)