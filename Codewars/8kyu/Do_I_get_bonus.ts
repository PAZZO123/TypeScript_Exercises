
    function bonusTime(salary:number, bonus:boolean):string {
      if(bonus){
        return `£${salary*10}`
      }
      return `£${salary}`
    }
 console.log(bonusTime(1000, true))