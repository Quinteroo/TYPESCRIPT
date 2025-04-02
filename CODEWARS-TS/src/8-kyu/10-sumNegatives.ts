


//! Count of positives / sum of negatives
//? https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/typescript

//Given an array of integers.
//Return an array, where the first element is the count of positives numbers and the second 
//element is sum of negative numbers. 0 is neither positive nor negative.
//If the input is an empty array or is null, return an empty array.

//Example
//For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

export function countPositivesSumNegatives(input: number[] | null): number[] {
    if (!input || input.length === 0) return []; //! tenemos que contemplar la posibilidad de que el input llegue vacío. Si input es null, el código fallará porque intenta acceder a .length.

    let positives: number = 0;
    let negatives: number = 0;

    for (const num of input) {
        if (num > 0) {
            positives++;
        } else if (num < 0) {
            negatives += num;
        }
    }

    return [positives, negatives];
}
