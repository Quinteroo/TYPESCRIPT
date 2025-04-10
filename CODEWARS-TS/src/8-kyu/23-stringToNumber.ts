


//! Convert a String to a Number!
// https://www.codewars.com/kata/544675c6f971f7399a000e79/train/typescript

//"1234" --> 1234
//"605"  --> 605
//"1405" --> 1405
//"-7" --> -7

export function stringToNumber(str: string | null): number | undefined {
  if(str === null) return undefined

  return Number(str)
}
