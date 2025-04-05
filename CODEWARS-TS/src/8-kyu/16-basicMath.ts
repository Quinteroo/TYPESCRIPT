

//! Basic Mathematical Operations
//? https://www.codewars.com/kata/57356c55867b9b7a60000bd7/train/typescript
// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

export function basicOp(operation: string, value1: number, value2: number): number | undefined {
  if (operation === null || value1 === null || value2 === null) return undefined

  if(operation === "+") return value1 + value2
  if(operation === "-") return value1 - value2
  if(operation === "*") return value1 * value2
  if(operation === "/") return value1 / value2
}