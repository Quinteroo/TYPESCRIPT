
//! Regex validate PIN code
//? https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/typescript

//Description:
//ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

//If the function is passed a valid PIN string, return true, else return false.

//Examples (Input --> Output)
//"1234"   -->  true
//"12345"  -->  false
//"a234"   -->  false



//? https://www.freecodecamp.org/espanol/news/expresiones-regulares-regex-en-javascript-manual-para-principiantes/
//? https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_expressions/Cheatsheet
//? /^abc/ --> "La cadena debe empezar exactamente con 'abc'"


export class Kata {
  static validatePin(pin: string): boolean {
    
    //  /^(\d{4}|\d{6})$/
    const regex = /^([0-9]){4}$|^([0-9]){6}$/
    
    
    return regex.test(pin)
  }
}

