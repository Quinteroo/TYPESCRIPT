

//! Grasshopper - Grade book
//? https://www.codewars.com/kata/55cbd4ba903825f7970000f5/train/typescript

//Grade book
//Complete the function so that it finds the average of the three scores passed 
//to it and returns the letter value associated with that grade.

//Numerical Score	Letter Grade
//90 <= score <= 100	'A'
//80 <= score < 90	'B'
//70 <= score < 80	'C'
//60 <= score < 70	'D'
//0 <= score < 60	'F'

export function getGrade(a: number | null, b: number | null, c: number | null): string {

  if (a == null || b == null || c == null) {
    throw new Error("All inputs must be valid numbers"); //! validamos que no sean 0 null o undefine
  }

  const average: number = (a + b + c) / 3;

  if (average >= 90 && average <= 100) return "A";
  if (average >= 80 && average < 90) return "B";
  if (average >= 70 && average < 80) return "C";
  if (average >= 60 && average < 70) return "D";
  if (average >= 0 && average < 60) return "F";

  throw new Error("Invalid average score"); //! si llega aquí es que el promedio es inválido, como negativco o mayor que 100
}
