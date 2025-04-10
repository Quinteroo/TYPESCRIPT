

//! Remove First and Last Character
//? https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/typescript

//It's pretty straightforward. Your goal is to create a function that removes the first and last characters of 
//a string. You're given one parameter, the original string. You don't have to worry about strings with less 
//than two characters.


export function removeChar(str: string | null): string | undefined {
  if (str === null) return undefined;
  if (str.length <= 2) return ""; // si queda vacío o solo uno, devuelves string vacío

  return str.slice(1, -1); // corta desde el 1 hasta el penúltimo
}
