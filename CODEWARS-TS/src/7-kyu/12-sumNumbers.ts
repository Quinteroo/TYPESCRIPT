

//! Beginner Series #3 Sum of Numbers
//? https://www.codewars.com/kata/55f2b110f61eb01779000053/typescript

//Given two integers a and b, which can be positive or negative, find the sum of all the integers 
//between and including them and return it. If the two numbers are equal return a or b.

//Note: a and b are not ordered!

//Examples (a, b) --> output (explanation)
//(1, 0) --> 1 (1 + 0 = 1)
//(1, 2) --> 3 (1 + 2 = 3)
//(0, 1) --> 1 (0 + 1 = 1)
//(1, 1) --> 1 (1 since both are same)
//(-1, 0) --> -1 (-1 + 0 = -1)
//(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
//Your function should only return a number, not the explanation about how you get that number.

export function getSum(a: number, b: number): number {
  if(a === b) return a
  
  let numbers:number[] = [a, b];
  let sumArray:number[] = [];

  numbers = numbers.sort(function (a, b) { return a - b; });

  let lowNum:number = numbers[0]                                   
  let highNum:number = numbers[numbers.length - 1]                 

  while (lowNum < highNum + 1) {                           
    sumArray.push(lowNum)
    lowNum += 1                                             
  }
  return sumArray.reduce((a,b) => a + b,0);
}
