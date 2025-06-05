


//! Find the unique number
//? https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/typescript

/*
findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
*/


export function findUniq(arr: number[]): number {
  let uniq = [...new Set(arr)]
   return (arr.filter((e)=> e === uniq[0]).length === 1) ? uniq[0] : uniq[1]
  }
