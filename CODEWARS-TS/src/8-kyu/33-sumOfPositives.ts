


//! Sum of positive
//? https://www.codewars.com/kata/5715eaedb436cf5606000381/train/typescript

//Task
//You get an array of numbers, return the sum of all of the positives ones.

//Example
//[1, -4, 7, 12] => 20
//Note
//If there is nothing to sum, the sum is default to 0.



export function positiveSum(arr:number[]| null):number {
    if(arr === null) return 0;
    let total:number = 0;

    for(let i = 0; i<arr.length;i++){
        if(arr[i] > 0){ total+= arr[i]}
    }

  return total;
}


//! REFACTORIZADO
export function positiveSum(arr:number[]):number {
  return arr.filter((e) => e >= 0).reduce((acc, e) => acc + e , 0)
}
