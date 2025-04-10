

//! Square(n) Sum
//? https://www.codewars.com/kata/515e271a311df0350d00000f/train/typescript

//For example, for [1, 2, 2] it should return 9 because 


export function squareSum(numbers: number[]): number { 
    return numbers.map((e)=> e**2).reduce((a,b)=> a+b,0)
}
