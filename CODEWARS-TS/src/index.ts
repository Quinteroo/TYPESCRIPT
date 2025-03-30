
//! Kata ejemplo 1
// dado un número entero 123456, devuelve un número que sea el resultado de unir cada número por separado elevado al cuadrado

const concatPowers = (param:number):number => {
  const splitNum: string[] = param.toString().split("")
  const numPow: number[] = splitNum.map((n)=> Math.pow(Number(n),2))
  const joinPow:number = Number(numPow.join(""))
  return joinPow
}

//refactorizado
const concatPowers1 = (param: number): number =>  Number(param.toString().split("").map(n => (+n) ** 2).join(""));




