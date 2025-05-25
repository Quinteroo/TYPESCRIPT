


//! Summing a number's digits
//? https://www.codewars.com/kata/52f3149496de55aded000410/train/typescript

// Write a function which takes a number as input and returns the sum of the absolute 
// value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5

// Let's assume that all numbers in the input will be integer values.


export function sumDigits(n: number): number {
  return n.toString().replace("-","").split("").map((e)=> +e).reduce((a,b)=>a+b,0)
}


console.log(sumDigits(10))
console.log(sumDigits(99))
console.log(sumDigits(-32))