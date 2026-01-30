function stringExpansion(s:string):string{
  let times=1
  return s.split('').map((char)=>{
    if(!isNaN(parseInt(char))){
      times=+char
      return ""
    }
    else return char.repeat(times)
  }).join('')
}

console.log(stringExpansion("3bnmjsjs"))//bbbnnnmmmjjjsssjjjsss

