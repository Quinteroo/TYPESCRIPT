//! TIPADO 2

//?ANY
// Cuando decimos que una variable es any, 
// decimos que esa variable es cualquier cosa, 
// prácticamente estamos desactivando TypeScript para esa variable

let myAnyVariable: any;

// podemos ver como puede hacer cualquier cosa 
myAnyVariable.split("");
myAnyVariable.isFixed(2);
myAnyVariable.map(()=>{});

//any NUNCA se debe de utilizar, trabajando en equipo suele haber un checker que impide 
// subir repositorios si contienen Any



//?UNKNOW
// mejor usar unknow,tampoco se debe, pero por lo menos sabe que algo no va bien y 
// te da error si no tiene el tipado.

let myUnkowVariable : unknown;

// esto te permite declarar una variable y castearla más tarde
(myUnkowVariable as string).split("");


//?Arrays
const myFirstArr: (string | number)[] = ["a","b",2]

const mySecondArr: Array<string | number> = [1,3,"c"];

const myThirdArr: [string, number, string] = ["d",2,"e"]  // este es el que menos se usa porque obliga a seguir el tipado y estructura exacto