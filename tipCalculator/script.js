const tipCalculator = (quality, total) => {
    if ( quality === 'bad'){
      return total / 100 * 5
    } else if (quality === 'ok'){
      return total / 100 * 15
    } else if (quality === 'good'){
      return total / 100 * 20
   }  else if (quality === 'excellent'){
      return total / 100 * 30
   } return total / 100 * 18
  }
  
  
  console.log(tipCalculator('bad', 100)) //should return 20