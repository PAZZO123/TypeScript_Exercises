 function pyramid(n: number) : Array<Array<Number>> {
  let result :any[]=[]
  for(let i=1;i<=n;i++){
    let current:number[]=[]
    for(let j=1;j<=i;j++){
      current.push(1)
    }
    result.push(current)
  }
    return result;
}
//test cases
console.log(pyramid(3))