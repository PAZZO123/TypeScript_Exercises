interface Point{
    height:number;
    width:number;
    name?:string;
}

let Angle:Required<Point>={
    height:12,
    width:11,
    name:'trinangle'
}
console.log(Angle)