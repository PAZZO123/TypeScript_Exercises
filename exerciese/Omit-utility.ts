interface Point{
    height:number;
    width:number;
    name?:string;
}

let Angle:Omit<Point, 'width'|'height'>={
    name:'trinangle'
}
console.log(Angle)