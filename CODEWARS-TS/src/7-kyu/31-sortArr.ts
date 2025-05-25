


//! Sort arrays - 1
//? https://www.codewars.com/kata/51f41b98e8f176e70d0002a8/train/typescript

// Just a simple sorting usage. Create a function that returns the 
// elements of the input-array / list sorted in lexicographical order



export function sortMe (names: string[]): string[] {
  return names.sort()
}


console.log(sortMe(["one", "two", "three"]))