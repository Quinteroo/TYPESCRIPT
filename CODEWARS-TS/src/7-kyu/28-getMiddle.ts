

//! Get the Middle Character
//? https://www.codewars.com/kata/56747fd5cb988479af000028/train/typescript

// You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.

// If the string's length is odd, return the middle character.
// If the string's length is even, return the middle 2 characters.
// Examples:
// "test" --> "es"
// "testing" --> "t"
// "middle" --> "dd"
// "A" --> "A"


export function getMiddle(s:string) {
  let sSplit = s.split("")
  if(s.length % 2 === 0){
    return `${sSplit[(s.length / 2)-1]}${sSplit[s.length / 2]}`
  }else{
    return sSplit[Math.ceil(s.length / 2)-1]
  }
} 