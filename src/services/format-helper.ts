export function getPercent(numerator:number, denominator:number){
    return (numerator*100/denominator)
}

export function getCurrencyFormatter(amount: number, denominationSymbol = 'INR'){
    var formatter = new Intl.NumberFormat('hi', {
        style: 'currency',
        currency: denominationSymbol,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      });
      return formatter.format(amount);
}

