


//! String ends with?
//? https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/typescript

// Complete the solution so that it returns true if the first argument(string) 
// passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

export function solution(str: string, ending: string): boolean {
  if (ending === "") return true;

  if(str.length < 2) return str === ending; //* si str !== eding devuelve false

  let endingLenght:number = ending.length;

  return (str.slice(-endingLenght) === ending) ? true : false
}

//! REFACTORIZADO


export function solution1(str: string, ending: string): boolean {
  return str.endsWith(ending);
}