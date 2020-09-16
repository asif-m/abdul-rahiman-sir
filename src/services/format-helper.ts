export function getPercent(numerator:number, denominator:number){
    return (numerator*100/denominator)
}

export function getCurrencyFormatter(amount: number, denominationSymbol = 'INR'){
    var formatter = new Intl.NumberFormat('hi', {
        style: 'currency',
        currency: denominationSymbol,
      });
      
      return formatter.format(amount);
}

