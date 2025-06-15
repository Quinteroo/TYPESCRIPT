

//! The Vowel Code
//? https://www.codewars.com/kata/53697be005f803751e0015aa/solutions/typescript

/*
a -> 1
e -> 2
i -> 3
o -> 4
u -> 5
*/



// turn vowels into numbers
export function encode(string: string): string {

    return string
  .replace(/a/g, "1")
  .replace(/e/g, "2")
  .replace(/i/g, "3")
  .replace(/o/g, "4")
  .replace(/u/g, "5");

}

// turn numbers back into vowels
export function decode(string: string): string {
  return string
  .replace(/1/g, "a")
  .replace(/2/g, "e")
  .replace(/3/g, "i")
  .replace(/4/g, "o")
  .replace(/5/g, "u");

}


//! REFACTORIZADO

const vowels = 'aeiou';

// turn vowels into numbers
export function encode(string: string): string {
  return string.replace(/[aeiou]/g, (x) => (vowels.indexOf(x)+1).toString());
}

// turn numbers back into vowels
export function decode(string: string): string {
  return string.replace(/[1-5]/g, (x) => vowels.charAt(parseInt(x)-1) );
}
