

//! Detect Pangram
//? https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/typescript
//* https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/every

/*
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence 
"The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
*/

export const isPangram = (phrase: string): boolean => {

    return "abcdefghijklmnopqrstuvwxyz".split("").every((e)=>phrase.toLowerCase().includes(e))

}
