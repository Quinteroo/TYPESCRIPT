


//! Sum without highest and lowest number
//? https://www.codewars.com/kata/576b93db1129fcf2200001e6/train/typescript

//Task
//Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
//The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
//Mind the input validation.
//Example
//{ 6, 2, 1, 8, 10 } => 16
//{ 1, 1, 11, 2, 3 } => 6


export function sumArray(array: number[] | null): number {
    if (!array || array.length <= 0) return 0 

    let filteredArray = [...array];

    const lowestIndex = filteredArray.indexOf(Math.min(...filteredArray));
    if (lowestIndex !== -1) filteredArray.splice(lowestIndex, 1);

    const highestIndex = filteredArray.indexOf(Math.max(...filteredArray));
    if (highestIndex !== -1) filteredArray.splice(highestIndex, 1);

    return filteredArray.reduce((a, b) => a + b, 0);
}


//! REFACTORIZADO
export function sumArray(array:number[] | null) : number {
  if (!array || array.length <= 1) return 0;
  return array.sort((a, b) => a - b).slice(1, -1).reduce((p, n) => p + n, 0);
}
