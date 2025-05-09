


//! Sum of odd numbers
//? https://www.codewars.com/kata/55fd2d567d94ac3bc9000064/solutions/typescript

//Given the triangle of consecutive odd numbers:

//             1
//          3     5
//       7     9    11
//   13    15    17    19
//21    23    25    27    29
//...
//Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

//1 -->  1
//2 --> 3 + 5 = 8

//! REFACTORIZADO
export function rowSumOddNumbers(n: number) {
  return Math.pow(n, 3)
}

// primera prueba (funciona)
export function rowSumOddNumbers(n:number):number{

    let suma = 0;
    for (let i = 0; i <= n; i++) {
        suma += i;
    }

    let arr:number[] = []
    let x:number = 1;

    while(arr.length < suma ){
        if(x %2!== 0){
            arr.push(x)
            x++
        }else{
            x++
            arr.push(x)
            x++
        }
    }

    let result:number[] = arr.slice(-n)

    return result.reduce((a,b)=> a+b,0)
}

console.log(rowSumOddNumbers(4))
