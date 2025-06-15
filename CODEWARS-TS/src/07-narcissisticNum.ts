

//! Does my number look big in this?
//? https://www.codewars.com/kata/5287e858c6b5a9678200083c/train/typescript

/*
A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits,
each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).
For example, take 153 (3 digits), which is narcissistic:

 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
*/


export function narcissistic(value: number): boolean {
  
  let numArr:number[] = value.toString().split("").map((e)=>Number(e))

    let narcissisticNumber = numArr.map((e)=>Math.pow(e,numArr.length)).reduce((a,b)=> a+b)

    return value === narcissisticNumber
}
