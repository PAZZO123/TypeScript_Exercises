interface Shape {
  getArea: () => number;
}

class Rectangle implements Shape {
  public constructor(protected readonly width: number, protected readonly height: number) {}

  public getArea(): number {
    return this.width * this.height;
  }
}

  class Triangle extends Rectangle{
      public constructor(width:number, height:number){
          super(width, height)
      }
      public override getArea():number{
          return 0.5*this.width*this.height
      }
  }

let s = new Triangle(2,2)
console.log(s.getArea())//484