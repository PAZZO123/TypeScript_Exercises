class person {
  private  name:string
  public constructor(name:string){
      this.name=name
  }
  public getname():string{
      return this.name
  }
}
let Person=new person('Pazzo')
//Person.name='mbabazi'
console.log(Person.getname())