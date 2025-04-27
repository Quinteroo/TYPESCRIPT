

//! Reverse words
//? https://www.codewars.com/kata/5259b20d6021e9e14c0010d4


// Description:
// Complete the function that accepts a string parameter, and reverses each word 
// in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"


export function reverseWords(str: string | null): string | undefined {
  if (str === null) return undefined

  const splitStr = str.split(" ");

  const arr = splitStr.map((e)=>e.split("").reverse().join(""))

  return arr.join(" ")

}


//? .map() no modifica el array original.
//? .map() crea un nuevo array transformado, pero si no lo asignas a una variable, se pierde.