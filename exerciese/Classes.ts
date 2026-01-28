class User{
    private courseCount=1
    private readonly city="Kigali"
    constructor(public name:string, private email:string){}

    //Getter
    get getAppleEmail():string{
        return `apple${this.email}`
    }
    get courseCounts():number{
        return this.courseCount
    }
    //Private method
    private deleteToken(){
        console.log('Token Deleted')
    }
    //Setter
    set CourseCount(newCount:number){
           this.courseCount=newCount
    }

}