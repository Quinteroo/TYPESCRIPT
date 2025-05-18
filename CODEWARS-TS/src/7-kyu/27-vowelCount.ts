

//! Vowel Count
//? https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/typescript


// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

export class Kata {
  static getCount(str: string): number {
    return str.split("").filter((w)=> "aeiou".includes(w)).length
  }
}