//!Shortest Word
//? https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/solutions/typescript
//Simple, given a string of words, return the length of the shortest word(s).
//String will never be empty and you do not need to account for different data types.



export function findShort(s: string): number {
  let sSplit = s.split(" ")
    let shorter = sSplit[0];

  for(let i = 0; i < sSplit.length;i++){
    if(sSplit[i].length < shorter.length){
        shorter = sSplit[i]
    }
  }

  return shorter.length
}
