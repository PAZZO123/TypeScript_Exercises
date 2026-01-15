class NamedValue<T=string>{
    private value:T|undefined;
    constructor(private name:string){}
    public getValue():T|undefined{
        return this.value
    }
    public setValue(newValue:T):void{
        this.value=newValue;
    }
    
    public toString():string{
        return ` ${this.name}: ${this.value}`
    }
}
let n= new NamedValue<number>('Patrick')
 n.setValue(24)
 console.log(n.toString())