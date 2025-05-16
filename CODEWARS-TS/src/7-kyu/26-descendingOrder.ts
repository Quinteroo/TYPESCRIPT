

//! Descending Order
//? https://www.codewars.com/kata/5467e4d82edf8bbf40000155/solutions/typescript

//Your task is to make a function that can take any non-negative integer as an argument and return 
//it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

//Examples:
//Input: 42145 Output: 54421
//Input: 145263 Output: 654321
//Input: 123456789 Output: 987654321

export function descendingOrder(n: number): number {
  let numArr=  n.toString().split("").map(e=> +e).sort((a,b)=>b-a).join("")
  return +numArr
}
