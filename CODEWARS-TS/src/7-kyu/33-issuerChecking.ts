

//! Credit card issuer checking
//? https://www.codewars.com/kata/5701e43f86306a615c001868/train/typescript

//Given a credit card number we can determine who the issuer/vendor is with a few basic knowns.
//Complete the function getIssuer() that will use the values shown below to determine the card issuer for a given card number.
//If the number cannot be matched then the function should return the string Unknown.

//Where Issuer is defined with the following enum type.

/*
enum Issuer {
  VISA = 'VISA',
  AMEX = 'AMEX',
  Mastercard = 'Mastercard',
  Discover = 'Discover',
  Unknown = 'Unknown',
}
Examples
getIssuer(4111111111111111) == "VISA"
getIssuer(4111111111111) == "VISA"
getIssuer(4012888888881881) == "VISA"
getIssuer(378282246310005) == "AMEX"
getIssuer(6011111111111117) == "Discover"
getIssuer(5105105105105100) == "Mastercard"
getIssuer(5105105105105106) == "Mastercard"
getIssuer(9111111111111111) == "Unknown"
*/

/*
enum Issuer {
  VISA = 'VISA',
  AMEX = 'AMEX',
  Mastercard = 'Mastercard',
  Discover = 'Discover',
  Unknown = 'Unknown',
}
*/
import {Issuer} from "./preloaded";
export const getIssuer = (x: number): Issuer => {
  const num = x.toString();
  const len = num.length;

  if ((num.startsWith('4')) && (len === 13 || len === 16)) {
    return Issuer.VISA;
  }

  if ((num.startsWith('34') || num.startsWith('37')) && len === 15) {
    return Issuer.AMEX;
  }

  if (/^5[1-5]/.test(num) && len === 16) {
    return Issuer.Mastercard;
  }

  if (num.startsWith('6011') && len === 16) {
    return Issuer.Discover;
  }

  return Issuer.Unknown;
};
